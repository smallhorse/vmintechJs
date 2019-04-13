/* @preserve
 * 
 * 
 * Copyright (c) 2016 UBT Company
 *
 * 
 */

/**
 * logix.jsx version 1.0
 * 
 * block custom define
 * 
 * feature start block, goto start block
 * 
 */
'use strict';
var colours = require('../../../engine/service/colours');
var FieldDisplayEmotion = require('../../../engine/adapter/field_display_emotion');
var FieldPlayTune  = require('../../../engine/adapter/field_play_tune');
var FieldSettingLight = require('../../../engine/adapter/field_setting_light');
var blocklyDatas = require('../../../engine/service/blockly_datas');

module.exports = function (Blocks) {

    // 音效
    Blocks['id_show_play_effects'] = {
        init: function init() {
            this.setInputsInline(true);
            var image = new Blockly.FieldImage("./images/toolbar/icon_play_tune.png", 18, 18, "play_tune");
            this.appendDummyInput('images').appendField(image);
            var para = "{\"type\":\"animal\",\"key\":\"bear\",\"description\":\"bear\"}";
            para = '{"type":' + '"animal", ' +  '"key":' + '"bear", ' + '"description":' + '"' + MSG['bear'] + '"}';
            var playTune = new Blockly.FieldPlayTune(para, function(param) {
                    this.sourceBlock_.updateText(param);
                });  
            this.appendDummyInput()
                .appendField(MSG['id_show_play_effect'])
                .appendField(playTune, "Effect");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
            this.setColour(colours['id_show'].primary);
            this.setHelpUrl('');
            var typeText = MSG['animal'];
            var keyText = MSG['bear'];
            var showText = typeText + ':' + keyText;
            this.getField('Effect').setText(showText);
        },
        popupKey : 'soundEffects',
        updateText : function(param) {
            var type = param.type;
            var key = param.key;
            var jsonValue = JSON.stringify(param);
            this.setFieldValue(jsonValue, 'Effect');
            var typeText = MSG[type] ? MSG[type] : '动物';
            var keyText = '';
            if (type == 'animal' || type == 'machine') {
                keyText = MSG[key] ? MSG[key] : '熊';
            } else {
                keyText = param.description;
                if (keyText =='' ||keyText== undefined) {
                    var obj = {};
                    obj.type = 'animal';
                    obj.key = 'bear';
                    this.setFieldValue(JSON.stringify(obj), 'Effect');
                    typeText = MSG[obj.type];
                    keyText = MSG[obj.key];
                }
            }
            //var keyText = MSG[key] ? MSG[key] : '熊';
            var showText = typeText + ':' + keyText;
            this.getField('Effect').setText(showText);
        },
        popupService : function() {
            var jsonValue = this.getFieldValue('Effect');
            var objData = {};
            if (jsonValue != "") {
                objData = JSON.parse(jsonValue);
            }
            return objData;
        },
        convertValueToText : function convertValueToText(value) {
            if(value=="")return;
            var jsonValue = JSON.parse(value);
            var type = jsonValue.type;
            var key = jsonValue.key;
            var typeText = MSG[type] ? MSG[type] : '动物';
            var keyText = '';
            if (type == 'animal' || type == 'machine') {
                keyText = MSG[key] ? MSG[key] : '熊';
            } else {
                keyText = jsonValue.description;
            }
            var showText = typeText + ':' + keyText;
            this.getField('Effect').setText(showText);
        }
    };

    // 音调
    Blocks['id_show_play_tune'] = {
          init: function init() {
                this.setInputsInline(true);
                var image = new Blockly.FieldImage("./images/toolbar/icon_sound_effect.png", 18, 18, "sound_effect");
                this.appendDummyInput('images').appendField(image);
                this.appendDummyInput()
                    .appendField(MSG['id_show_play_tune']);
                    //.appendField(new Blockly.FieldTextInput("CS"), "Tune");

              var playTune = new Blockly.FieldPlayTune("C5", function(param) {
                    this.sourceBlock_.updateText(param);
                });
                this.appendDummyInput().appendField(playTune, 'Tune');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip('');
                this.setColour(colours['id_show'].primary);
                this.setHelpUrl('');
          },
          popupKey : 'playTune',
          popupService : function() {
                var tune = this.getFieldValue('Tune');
                var objData = {};
                objData.tune = tune;
                return objData;
          },
          updateText : function(param) {
                var tune = param.tune;
                this.setFieldValue(tune, 'Tune');
                this.getField('Tune').setText(tune);
          },
          convertValueToText : function convertValueToText(value) {
              this.getField('Tune').setText(value);
          }
    };

    // 表情
    Blocks['id_show_emoji'] = {
        init: function init() {
            this.setInputsInline(true);
            var image = new Blockly.FieldImage("./images/toolbar/icon_emotion.png", 18, 18, "emotion");
            this.appendDummyInput('images').appendField(image);
            this.appendDummyInput().appendField(MSG['id_show_show_emoji']);
            var lightIds = blocklyDatas.getLightsIds();
            var value = '';
            var text = '';
            var len = lightIds.length;
            if (len > 0) {              
                var textValue = '';
                var initValueArr = [];
                var isShowHidden = false;
                for (var i = 0 ; i < len; i++ ) {
                    var lightId = lightIds[i];
                    var objTemp = {};
                    objTemp.id = lightIds[i];
                    objTemp.emotionIndex = 0;
                    objTemp.color = '#2dc6ec';
                    initValueArr.push(objTemp);
                    if (i > 1) {
                        isShowHidden = true;
                        continue;
                    } else {
                        if (!isNaN(lightId)) {
                            textValue += 'ID-'+lightIds[i] + ':'
                        } else {
                            textValue += lightIds[i] + ':'
                        }
                        //textValue += lightIds[i] + ','
                        textValue += this.smileArray[0] + ';';
                    }
                    
                    
                }
                value = JSON.stringify(initValueArr);
                text = textValue.substring(0, textValue.length-1) + (isShowHidden?'...':'');
            }
            var displayEmotion = new Blockly.FieldDisplayEmotion( text, value, function (params) {
                this.sourceBlock_.updateShape_(params);
            });
            this.appendDummyInput("emotion_input").appendField(displayEmotion, "Emotion");
            this.appendValueInput("value_input").setCheck("Number");
            this.appendDummyInput().appendField(MSG['id_show_times']);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
            this.setColour(colours['id_show'].primary);
            this.setHelpUrl('');
        },
        popupKey : 'emotionDisplay',
        popupService: function popupService() {
            var lightIds = blocklyDatas.getLightsIds();
            var jsonValue = this.getFieldValue('Emotion');        
            if (jsonValue =='') {
                lightIds = [];
                var objTemp = {};
                objTemp.id = 1;
                objTemp.emotionIndex = 0;
                objTemp.color = '#2dc6ec';
                lightIds.push(objTemp);
                return lightIds;
            } else  {
                var lightArray = JSON.parse(jsonValue);
                return lightArray;
            }
            
        },
        updateShape_ : function updateShape_(param) {
            var jsonValue = JSON.stringify(param);
            this.setFieldValue(jsonValue, 'Emotion');
            var textValue = '';
            var isShowHidden = false;
            for (var i = 0 ; i < param.length; i++) {
                if ( i > 1) {
                    var isShowHidden = true;
                    continue;                  
                } else {
                    var lightId = param[i].id;
                    if (!isNaN(lightId)) {
                        textValue += 'ID-'+param[i].id + ':'  
                    } else {
                        textValue += param[i].id + ':'
                    }                     
                    textValue += this.smileArray[param[i].emotionIndex] + ';';
                }                
            }
            this.getField('Emotion').setText(textValue.substring(0,textValue.length-1) + (isShowHidden? '...':''));
        },
        smileArray : [MSG["id_zhayan"],MSG["id_haixiu"],MSG["id_relei"], MSG["id_leiguang"],MSG["id_cry"],MSG["id_yun"],MSG["id_happy"], MSG["id_jingya"],MSG["id_huxi"],MSG["id_shanshuo"],MSG["id_fengshan"],MSG["id_yugua"]],
        convertValueToText : function convertValueToText(value) {
            var jsonValue = JSON.parse(value);
            var len = jsonValue.length;
            var textStr = '';
            var isShowHidden = false;
            for (var i = 0 ; i < len; i++) {
                var emotion = jsonValue[i];
                var index = emotion['emotionIndex'];
                var emotionText = this.smileArray[index];
                if (i > 1) {
                    var isShowHidden = true;
                    continue;
                } else {
                    var lightId = emotion['id'];
                    if (!isNaN(lightId)) {
                        textStr +='ID-'+emotion['id']+':';  
                    } else {
                        textStr +=emotion['id']+':'; 
                    }               
                    textStr += emotionText +';';
                }
                
            }
            textStr= textStr.substring(0,textStr.length-1);
            this.getField('Emotion').setText(textStr + (isShowHidden? '...':'')); 
            var lightIds = blocklyDatas.getLightsIds();
            if (jsonValue[0].id == 'ID' && lightIds[0] == 'ID') {
                this.setDisabled(true);
            }
        }
    };
// 情景灯
    Blocks['id_show_scenelight'] = {
        init: function init() {
            this.setInputsInline(true);
            var image = new Blockly.FieldImage("./images/toolbar/icon_scenelight.png", 18, 18, "emotion");
            this.appendDummyInput('images').appendField(image);
            this.appendDummyInput().appendField(MSG['id_show_scenelight']);
            var lightIds = blocklyDatas.getLightsIds();
            var value = '';
            var text = '';
            var len = lightIds.length;
            if (len > 0) {              
                var textValue = '';
                var initValueArr = [];
                var isShowHidden = false;
                for (var i = 0 ; i < len; i++ ) {
                    var lightId = lightIds[i];
                    var objTemp = {};
                    objTemp.id = lightIds[i];
                    objTemp.emotionIndex = 0;
                    objTemp.color = '#2dc6ec';
                    initValueArr.push(objTemp);
                    if (i > 1) {
                        isShowHidden = true;
                        continue;
                    } else {
                        if (!isNaN(lightId)) {
                            textValue += 'ID-'+lightIds[i] + ':'
                        } else {
                            textValue += lightIds[i] + ':'
                        }
                        //textValue += lightIds[i] + ','
                        textValue += this.smileArray[0] + ';';
                    }
                    
                    
                }
                value = JSON.stringify(initValueArr);
                text = textValue.substring(0, textValue.length-1) + (isShowHidden?'...':'');
            }
            var displayEmotion = new Blockly.FieldDisplayEmotion( text, value, function (params) {
                this.sourceBlock_.updateShape_(params);
            });
            this.appendDummyInput("emotion_input").appendField(displayEmotion, "Emotion");
            this.appendValueInput("value_input").setCheck("Number");
            this.appendDummyInput().appendField(MSG['id_show_times']);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
            this.setColour(colours['id_show'].primary);
            this.setHelpUrl('');
        },
        popupKey : 'sceneLightDisplay',
        popupService: function popupService() {
            var lightIds = blocklyDatas.getsceneLightsIds();
            var jsonValue = this.getFieldValue('Emotion');        
            if (jsonValue =='') {
                lightIds = [];
                var objTemp = {};
                objTemp.id = 1;
                objTemp.emotionIndex = 0;
                objTemp.color = '#2dc6ec';
                lightIds.push(objTemp);
                return lightIds;
            } else  {
                var lightArray = JSON.parse(jsonValue);
                return lightArray;
            }
            
        },
        updateShape_ : function updateShape_(param) {
            var jsonValue = JSON.stringify(param);
            this.setFieldValue(jsonValue, 'Emotion');
            var textValue = '';
            var isShowHidden = false;
            for (var i = 0 ; i < param.length; i++) {
                if ( i > 1) {
                    var isShowHidden = true;
                    continue;                  
                } else {
                    var lightId = param[i].id;
                    if (!isNaN(lightId)) {
                        textValue += 'ID-'+param[i].id + ':'  
                    } else {
                        textValue += param[i].id + ':'
                    }                     
                    textValue += this.smileArray[param[i].emotionIndex] + ';';
                }                
            }
            this.getField('Emotion').setText(textValue.substring(0,textValue.length-1) + (isShowHidden? '...':''));
        },
        smileArray : [MSG["id_deng"], MSG["id_disco"], MSG["id_caise"], MSG["id_sanyuanse"]],
        convertValueToText : function convertValueToText(value) {
            var jsonValue = JSON.parse(value);
            var len = jsonValue.length;
            var textStr = '';
            var isShowHidden = false;
            for (var i = 0 ; i < len; i++) {
                var emotion = jsonValue[i];
                var index = emotion['emotionIndex'];
                var emotionText = this.smileArray[index];
                if (i > 1) {
                    var isShowHidden = true;
                    continue;
                } else {
                    var lightId = emotion['id'];
                    if (!isNaN(lightId)) {
                        textStr +='ID-'+emotion['id']+':';  
                    } else {
                        textStr +=emotion['id']+':'; 
                    }               
                    textStr += emotionText +';';
                }
                
            }
            textStr= textStr.substring(0,textStr.length-1);
            this.getField('Emotion').setText(textStr + (isShowHidden? '...':'')); 
            var lightIds = blocklyDatas.getLightsIds();
            if (jsonValue[0].id == 'ID' && lightIds[0] == 'ID') {
                this.setDisabled(true);
            }
        }
    };

    //设置灯光
    Blocks['id_show_led'] = {
        init: function init() {
            this.setInputsInline(true);
            var image = new Blockly.FieldImage("./images/toolbar/icon_light.png", 18, 18, "light");
            this.appendDummyInput('images').appendField(image);
            this.appendDummyInput().appendField(MSG['id_show_show_LEDs']);
            var lightIds = blocklyDatas.getLightsIds();
            var lightStr = '';
            var isShowHidden = false;
            if (lightIds[0] == 'ID') {
                lightStr = 'ID:' + MSG['id_all_bright']+';';
            } else {
                var len = lightIds.length;
                for (var i = 0 ; i < len; i++) {
                    if (i  > 1) {
                        isShowHidden = true;
                        continue;
                    } else {
                        lightStr+='ID-'+lightIds[i] + ':'+ MSG['id_all_bright'] +';';
                    }                  
                }
            }
            lightStr = lightStr.substring(0, lightStr.length-1) + (isShowHidden ? '...':'');
            //var lightStr = lightIds.join(';');
                //.appendField(new Blockly.FieldTextInput("ID-01,R3 G5 B8"), "Light");
            //var lightValue = '';
            var lightArray = [];
            for(var idx = 0; idx < lightIds.length; idx++){
                var objTemp = {};
                objTemp.id = lightIds[idx];
                objTemp.lights = ['#39C6EA','#FF0000','#FF7F00','#FFFF00','#00FF00','#00FFFF','#0000FF','#8B00FF'];
                lightArray.push(objTemp);
            }
            var light = new Blockly.FieldSettingLight(JSON.stringify(lightArray), lightStr, function(param) {
                this.sourceBlock_.updateText(param);
            });
            this.appendDummyInput('light_input').appendField(light, 'Light');
            this.appendDummyInput().appendField(MSG['id_show_time_during'])
            this.appendValueInput("value_input").setCheck("Number");
            this.appendDummyInput().appendField(MSG['id_show_time_ms']);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setTooltip('');
            this.setColour(colours['id_show'].primary);
            this.setHelpUrl('');
        },
        popupKey : 'settingLight',
        popupService : function() {
            var lightIds = blocklyDatas.getLightsIds();
            var jsonValue = this.getFieldValue('Light');
            var lightArray = JSON.parse(jsonValue); 

            return lightArray;
        },
        updateText : function(param) {
            console.log("MSG ======== >  ");
            console.log(MSG);
            var jsonValue = JSON.stringify(param);
            this.setFieldValue(jsonValue, 'Light');
            var textValue = '';
            var len = param.length;
            var isShowHidden = false;
            for (var i = 0 ; i < len; i ++) {         
                var lights = param[i]['lights'];
                var lightsLen = lights.length;
                var indexStr = MSG['id_all_bright'];
                for (var j = 0 ; j < lightsLen; j++ ) {
                    if (lights[j] =='') {
                        indexStr = MSG['id_custom'];
                        break;
                    }
                }
                if (i > 1) {
                    var isShowHidden = true;
                    continue;
                } else {
                    textValue +='ID-'+param[i]['id'] + ':';
                    textValue +=indexStr + ';';
                }               
            }
            this.getField('Light').setText('');
            this.getField('Light').setText(textValue.substring(0,textValue.length-1) +(isShowHidden? '...':''));
        },
        convertValueToText : function convertValueToText(value) {
            console.log("MSG ======== >  ");
            console.log(MSG);
            var jsonValue = JSON.parse(value);
            var len = jsonValue.length;
            var textStr = '';
            var isShowHidden = false;
            for (var i = 0 ; i < len; i++) {
                var lightObj = jsonValue[i];         
                var lights = lightObj['lights'];
                var lightLen = lights.length;
                var lightStr = MSG['id_all_bright'];
                for (var j = 0 ; j < lightLen; j++) {
                    if (lights[j] == '') {
                        lightStr = MSG['id_custom'];
                        break;
                    }
                }
                var lightId = lightObj['id'];
                if (i > 1) {
                    var isShowHidden = true;
                    continue;
                }  else {
                    if (!isNaN(lightId)) {
                        textStr +='ID-'+lightObj['id'] + ':'; 
                    } else {
                        textStr +=lightObj['id'] + ':';
                    }                
                    textStr +=lightStr +';'; 
                }             
            }
            this.getField('Light').setText('');
            this.getField('Light').setText(textStr.substring(0, textStr.length-1) +  (isShowHidden? '...':''));
            var lightIds = blocklyDatas.getLightsIds();
            if (jsonValue[0].id == 'ID' && lightIds[0] == 'ID') {
                this.setDisabled(true);
            }
        }
    };
}