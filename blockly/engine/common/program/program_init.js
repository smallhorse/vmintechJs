/* @preserve
 * 
 * 
 * Copyright (c) 2016 UBT Company
 *
 * 
 */

/**
 * program_init.js version 1.0
 * 
 * code local 
 * 
 * feature language international
 * 
 */
'use strict'
;(function() {

    var blocklyDatas = require('./../../service/blockly_datas');
    var eventsListener = require('./../events_listener');
    var $ = require('jquery');
    var colours = require('./../../service/colours');
    var utils = require('./../../common/utils/utils');
    var messageDialog = require('./../dialog/message_dialog');
    var CodeLanguage  = {};

    /**
     * Lookup for names of supported languages.  Keys should be in ISO 639 format.
     */
    CodeLanguage.LANGUAGE_NAME = {
    'ar': 'العربية',
    'be-tarask': 'Taraškievica',
    'br': 'Brezhoneg',
    'ca': 'Català',
    'cs': 'Česky',
    'da': 'Dansk',
    'de': 'Deutsch',
    'el': 'Ελληνικά',
    'en': 'English',
    'es': 'Español',
    'fa': 'فارسی',
    'fr': 'Français',
    'he': 'עברית',
    'hrx': 'Hunsrik',
    'hu': 'Magyar',
    'ia': 'Interlingua',
    'is': 'Íslenska',
    'it': 'Italiano',
    'ja': '日本語',
    'ko': '한국어',
    'mk': 'Македонски',
    'ms': 'Bahasa Melayu',
    'nb': 'Norsk Bokmål',
    'nl': 'Nederlands, Vlaams',
    'oc': 'Lenga d\'òc',
    'pl': 'Polski',
    'pms': 'Piemontèis',
    'pt-br': 'Português Brasileiro',
    'ro': 'Română',
    'ru': 'Русский',
    'sc': 'Sardu',
    'sk': 'Slovenčina',
    'sr': 'Српски',
    'sv': 'Svenska',
    'ta': 'தமிழ்',
    'th': 'ภาษาไทย',
    'tlh': 'tlhIngan Hol',
    'tr': 'Türkçe',
    'uk': 'Українська',
    'vi': 'Tiếng Việt',
    'zh-hans': '简体中文',
    'zh-hant': '正體中文'
    };

    /**
     * List of RTL languages.
     */
    CodeLanguage.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

    /**
     * Extracts a parameter from the URL.
     * If the parameter is absent default_value is returned.
     * @param {string} name The name of the parameter.
     * @param {string} defaultValue Value to return if paramater not found.
     * @return {string} The parameter value or the default value if not found.
     */
    CodeLanguage.getStringParamFromUrl = function(name, defaultValue) {
        var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
        return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
    };


    /**
     * Get the language of this user from the URL.
     * @return {string} User's language.
     */
    CodeLanguage.getLang = function() {
        var lang = CodeLanguage.getStringParamFromUrl('lang', '');
        if (CodeLanguage.LANGUAGE_NAME[lang] === undefined) {
            // Default to English.
            lang = 'en';
        }
        return lang;
    };

    /**
     * Is the current language (Code.LANG) an RTL language?
     * @return {boolean} True if RTL, false if LTR.
     */
    CodeLanguage.isRtl = function() {
        return CodeLanguage.LANGUAGE_RTL.indexOf(CodeLanguage.LANG) != -1;
    };


    /**
     * Load blocks saved on App Engine Storage or in session/local storage.
     * @param {string} defaultXml Text representation of default blocks.
     */
    CodeLanguage.loadBlocks = function(defaultXml) {
        try {
            var loadOnce = window.sessionStorage.loadOnceBlocks;
        } catch(e) {
            // Firefox sometimes throws a SecurityError when accessing sessionStorage.
            // Restarting Firefox fixes this, so it looks like a bug.
            var loadOnce = null;
        }
        if ('BlocklyStorage' in window && window.location.hash.length > 1) {
            // An href with #key trigers an AJAX call to retrieve saved blocks.
            BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        } else if (loadOnce) {
            // Language switching stores the blocks during the reload.
            delete window.sessionStorage.loadOnceBlocks;
            var xml = Blockly.Xml.textToDom(loadOnce);
            Blockly.Xml.domToWorkspace(xml, CodeLanguage.workspace);
        } else if (defaultXml) {
            // Load the editor with default starting blocks.
            CodeLanguage.workspace.clear();
            var xml = Blockly.Xml.textToDom(defaultXml);
            Blockly.Xml.domToWorkspace(xml, CodeLanguage.workspace);
        } else if ('BlocklyStorage' in window) {
            // Restore saved blocks in a separate thread so that subsequent
            // initialization is not affected from a failed load.
            window.setTimeout(BlocklyStorage.restoreBlocks, 0);
        }
    };

    /**
     * 初始化的时候载入
     */
    CodeLanguage.init = function() {
        CodeLanguage.initActions();
        //初始化语言
        CodeLanguage.initLanguage();
        //初始化工作空间
        CodeLanguage.initWorkSpace();
        //获取系统版本  1--通用版  2--教育版
        var platformType = blocklyDatas.getDataByKey("platformType");
        if(platformType == 2){
            var xmlObj = blocklyDatas.getDataByKey("sysXmlObj");
            if(xmlObj!=""){
                console.log(xmlObj.xmlContent);
                var res = utils.xmlIsCorrect(xmlObj.xmlContent);
                if(res){
                    CodeLanguage.loadBlocks(xmlObj.xmlContent);
                }else{
                    //载入默认的程序
                    CodeLanguage.loadBlocks(blocklyDatas.getDataByKey('defaultXml'));
                }
            }else{
                //载入默认的程序
                CodeLanguage.loadBlocks(blocklyDatas.getDataByKey('defaultXml'));
            }
        }else{
            //载入默认的程序
            CodeLanguage.loadBlocks(blocklyDatas.getDataByKey('defaultXml'));
        }
        CodeLanguage.initSwift();
        /**
        document.getElementById('save').addEventListener('click',function(){
            messageDialog.successDialog('保存成功保存成功保存成功保存成功保存成功保存成功保存成功保存成功');
        });
         */
    };

    CodeLanguage.initSwift = function() {
        var React = require('react');
        var ReactDOM = require('react-dom');
        var BlockShowSwift = require('./../../test/block_show_swift.jsx'); 
        var updateFieldValues = function() {
            ReactDOM.unmountComponentAtNode(document.getElementById("infoShower"));
	        $('#infoShower').empty();
        };
        $('#show_swift').on('click' , function name(e) {
            Blockly.DropDownDiv.hide();
            var programRunning = blocklyDatas.getDataByKey("programRunning");
            if(programRunning) return;
            ReactDOM.render(React.createElement(BlockShowSwift, {onSuccess:  updateFieldValues }), document.getElementById("infoShower"));
        });
    };


    /**
     * 初始化action动作
     */
    CodeLanguage.initActions = function() {
        var xmlNode = document.getElementById('toolbox');
        var cateNode = xmlNode.getElementsByTagName('category');
        var oldHtml = cateNode[1].innerHTML;
        var actionsStr = blocklyDatas.getDataByKey('actions');
        if (actionsStr) {
            var blockNode = '';
	        var actionsArr = actionsStr.split("|");
	        for(var i=0;i<actionsArr.length;i++){
		        var action = actionsArr[i].split(",");
		        blockNode += '<block type="'+action[0]+'"></block>';
		    }
	        cateNode[1].innerHTML = oldHtml + blockNode;	
        }  
    };

    //初始化语言 init language
    CodeLanguage.initLanguage = function() {
        // Set the HTML's language and direction.
        var rtl = CodeLanguage.isRtl();
        document.dir = rtl ? 'rtl' : 'ltr';
        document.head.parentElement.setAttribute('lang', CodeLanguage.LANG);
        //document.getElementById('tab_blocks').textContent = MSG['blocks'];        
        // var categories = ['catLogic', 'catLoops', 'catMath', 'catText', 'movements', 'catLists',
        //             'catColour', 'catVariables', 'catFunctions','id_start', 'id_actions',
        //              'id_moves', 'id_sensors','id_events','id_math','id_control'];
        var categories = ['id_start', 'id_actions','id_control','id_events','id_show','id_sensors','id_math'];
        for (var i = 0, cat; cat = categories[i]; i++) {
            document.getElementById(cat).setAttribute('name', MSG[cat]);
            //console.log("colors:"+colours[cat].primary);
            document.getElementById(cat).setAttribute('colour', colours[cat].primary);
        }
    };

    //初始化工作空间
    CodeLanguage.initWorkSpace = function() {

        var blockScale = 0.9;
        // 如果横屏时，高度大于600就判定设备为平板设备，block块放大到1.5倍
        if (window.screen.availHeight > 600) {
            blockScale = 1.5;
        }

        var rtl = CodeLanguage.isRtl();
        var toolbox = document.getElementById('toolbox');
        CodeLanguage.workspace = Blockly.inject('content_blocks',
            {
            media: '../media/',
            rtl: rtl,
            toolbox: toolbox,
            zoom:
                {controls: true,
                    wheel: true,
                    startScale: blockScale, //default 0.9
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2}
            }
        );
        CodeLanguage.initIndexSpace();
        Blockly.svgResize(CodeLanguage.workspace);

        //载入工作空间后绑定一个工作空间改变事件
        var workspaceChangeEvent = function (event) {
            if (event.type == Blockly.Events.UI) {
                return;  // Don't mirror UI events.
            }
            eventsListener.trigger("canvas changed");
        };
        CodeLanguage.workspace.addChangeListener(workspaceChangeEvent);

    };
    //初始化设置index界面的样式
    CodeLanguage.initIndexSpace = function(){
        //Blockly.Css.toolBoxHeight = document.getElementsByClassName("blocklyToolboxDiv")/7;
        //中间toolbox菜单的高度等于body总体高度减去头部高度和底部stop按钮高度(头部高度和底部stop按钮高度都是45px)

        // 获取窗口总高度
        var winHeight = document.body.clientHeight;
        console.log('window height: ' + winHeight);
        // 设置工作区高度
        // var wsHeight = (winHeight-49);
        var wsHeight = winHeight;
        console.log('workspace height: ' + wsHeight);
        $('#content_blocks')[0].style.height = wsHeight+"px";
        document.getElementsByTagName('svg')[0].getBBox().height = (wsHeight)+ 'px';
        // 设置左侧工具栏高度
        var toolBoxHeight = wsHeight-45;
        console.log('toolbar height: ' + toolBoxHeight);
        var objTemp = document.getElementsByClassName("blocklyTreeRow");
        var icons = ['start', 'actions','control','events','show','sensors','math'];
        if(objTemp.length>0){
            var rowNum = document.getElementsByClassName("blocklyTreeRow").length;
            console.log(rowNum);
            //由于第一个生成的菜单空间是隐藏区域，所以在总的菜单数量里面需要去掉一个
            var boxHeight = (toolBoxHeight-49)/(rowNum-1);
            for(var i = 1;i<rowNum;i++){
                objTemp[i].style.height = boxHeight+"px";        
                $('span.blocklyTreeIcon',objTemp[i]).addClass('blocklyTreeIcon_'+icons[i-1]);
                $('span.blocklyTreeIcon',objTemp[i]).attr('type',icons[i-1]);
                var color = colours['id_'+icons[i-1]]['primary'];
                $('span.blocklyTreeLabel',objTemp[i]).attr('style','color:'+color);
                objTemp[i].style.lineHeight = boxHeight+"px";
                objTemp[i].style.width = "110px";
            }
        }
        //清空工作空间背景
       // document.getElementsByClassName("blocklyMainBackground")[0].style.fill = "none";
       var obj1Temp = document.getElementsByClassName("blocklyMainBackground")[0];
       obj1Temp.style.strokeidth = "0";
       obj1Temp.style.stroke = "none";
        //去掉工作空间头部线条
        /* console.log(document.getElementsByClassName("blocklyTreeRow"));
         console.log(document.getElementsByClassName("blocklyTreeRow"));
         document.getElementsByClassName("blocklyTreeRow")[1].style.height = "93px";
         console.log(document.getElementsByClassName("blocklyTreeRow"));*/
    };

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = CodeLanguage;
        window.codeLanguage = CodeLanguage;
    } else if (typeof define === 'function' && define.amd) {
        define(function () { return CodeLanguage });
    } else {
        this.CodeLanguage = CodeLanguage;
    }

}).call(this);