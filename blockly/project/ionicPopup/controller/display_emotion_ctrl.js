'use strict';

var jQuery = require('jquery');
var ubtUtils = require('../../../engine/common/utils/utils');
require('../common/jquery-wheelcolorpicker')(jQuery);
var blocklyDatas = require('../../../engine/service/blockly_datas');
module.exports = function (app) {
    //项目管理
    app.controller('emotionDisCtrl', ['$scope','$ionicModal','$timeout','$ionicPopup','dataService',function($scope, $ionicModal,$timeout,$ionicPopup,dataService) {
        //是否已连接
        $scope.ledLight = {link:true};
        //当前LED灯
        var curLight =  blocklyDatas.getLightsIds();
        $scope.currentColorBlock='';
        $scope.colorBlock = ['#fe0000','#ff7f00','#fff000','#00ff01','#01ffff','#0000fe','#ff00fe','#50009f','#008040','#404040','#fe80fe','#ffffff'];
        
        /**
         * 根据灯光id查询是否连接
         * @param id
         */
        function isLink(id){
            var temp_param = true;
            if(curLight[0]=="ID"){ // 当前模型未连接任何LED
                temp_param = true;
            }else{//查看当前灯光是否连接
                for(var i=0;i<curLight.length;i++){
                    if(curLight[i]==id){
                        temp_param = false;
                        break;
                    }
                }
            }
            return temp_param;
        }

        //当前所选 LED 灯数据
        $scope.emotionParam = {"curLedIndex":"0", "curLedVal":"","emotionIndex":"0", "color":""};
        //所有LED灯数据
        $scope.emotionData = [];
        //表情二维数组，以三个为一行
        $scope.emotions = ["zhayan","haixiu","relei","leiguang","cry","yun","happy","jingya","huxi","shanshuo","fengshan","yugua"];
        $scope.emotionsName = [MSG["id_zhayan"],MSG["id_haixiu"],MSG["id_relei"], MSG["id_leiguang"],MSG["id_cry"],MSG["id_yun"],MSG["id_happy"], MSG["id_jingya"],MSG["id_huxi"],MSG["id_shanshuo"],MSG["id_fengshan"],MSG["id_yugua"]];
        
        
        /**
         * 切换 LED 灯动作
         * @param param1  当前所选灯的数据
         * @param ledIdx  当前所选灯在数组中的索引值
         */
        $scope.selectLight = function(param1, ledIdx){
            //保存切换前 led 灯所选的值
            for(var idx = 0; idx < $scope.emotionData.length; idx++){
                if(idx == $scope.emotionParam.curLedIndex){
                    $scope.emotionData[idx].emotionIndex = $scope.emotionParam.emotionIndex;
                }
            }
            jQuery('.face-box').css('border-color', '#EAEAEA');
            jQuery('.color-box').css('display', 'none');
            //加载切换后led灯的数据
            $scope.emotionParam.curLedVal = param1.id;
            $scope.emotionParam.curLedIndex = ledIdx;
            $scope.emotionParam.emotionIndex = param1.emotionIndex;
            $scope.emotionParam.color = param1.color;
            //判断当前灯光是否连接
            $scope.ledLight.link = isLink($scope.emotionParam.curLedVal);

            $scope.loadEmotionColor(param1.emotionIndex, param1.color);

            $scope.sendCommand(param1.color);
        };
        /**
         * 切换表情动作
         * @param param1    当前所选表情的数据
         * @param param2    当前所选表情在数组中的索引
         */
        $scope.selectEmotion = function(param1, param2){
            $scope.emotionParam.emotionIndex = param2;
            //jquery('.face-box').css('background-color', '');
            jQuery('.face-box').css('border-color', '#EAEAEA');
            jQuery('.color-box').css('display', 'none');
            // var color = '#'+jQuery('#colorPicker').val();
            var color = $scope.currentColorBlock;
            color = color == '#' ? $scope.emotionData[$scope.emotionParam.curLedIndex].color : color;
            $scope.loadEmotionColor(param2, color);

            $scope.emotionParam.color = color;
            $scope.emotionData[$scope.emotionParam.curLedIndex].color = color;
            $scope.emotionData[$scope.emotionParam.curLedIndex].emotionIndex = param2;

            $scope.sendCommand(color);
        }

        $scope.initData = function(){
            //初始化数据集合
            $scope.emotionData =  $scope.popupObject.inData;
            //初始赋值外界值
            $scope.popupObject.outData = $scope.emotionData;

            if($scope.emotionData.length>0){
                //选中初始化
                $scope.emotionParam.curLedVal = $scope.emotionData[0].id;
                //初始化ID
                $scope.emotionParam.emotionIndex = $scope.emotionData[0].emotionIndex;
                //判断当前灯光是否连接
                $scope.ledLight.link = isLink($scope.emotionParam.curLedVal);
                //初始化表情颜色
                $scope.emotionParam.color = $scope.emotionData[0].color;
                //初始化右侧颜色选择器
                $timeout(function(){
                    jQuery('.colorpicker').wheelColorPicker({
                        "layout":"block",
                        "sliders":"wv",
                        "preview":"true"
                    });
                    jQuery('#colorPicker').on('color-setting', function(){
                        // var selColor = "#"+jQuery(this).val();
                        var selColor =$scope.currentColorBlock;
                        $scope.loadEmotionColor($scope.emotionParam.emotionIndex, selColor);
                        $scope.emotionData[$scope.emotionParam.curLedIndex].color = selColor;
                        console.log(selColor);
                        $scope.sendCommand(selColor);
                    });
                    $scope.loadEmotionColor($scope.emotionParam.emotionIndex, $scope.emotionParam.color);
                });
            }


        };
        $scope.initData();

        /**
         * 设置所选表情的颜色
         * @param emotionIndex  选中的表情
         * @param emotionColor  所选的颜色
         */
        $scope.loadEmotionColor = function(emotionIndex, emotionColor){
            if(emotionColor == ""){
                emotionColor = "#2dc6ec";
            }
            var emotionBox = jQuery('.face-box').eq(emotionIndex);
            emotionBox.css('border-color','#2dc6ec');
            var colorBox = emotionBox.find('.color-box');
            colorBox.css('background-color', emotionColor);
            colorBox.css('display','block');
            emotionColor = emotionColor.replace('#', '');
            jQuery('#colorPicker').wheelColorPicker('setValue', emotionColor);
        }

        jQuery('.color-picker').on('click','span',function(){
            console.log("aaa");
            var index= jQuery(this).attr("data-index");
            console.log($scope.colorBlock[index-1]);
            jQuery(".color-picker span").removeClass("active");
            jQuery(this).addClass("active");
            $scope.currentColorBlock = $scope.colorBlock[index-1];
        });

        /**
         * 实时显示设置的表情
         * @param color         选择的颜色
         */
        $scope.sendCommand = function(color){
            var LEDParam = {};
            LEDParam.id = $scope.emotionParam.curLedVal;
            LEDParam.emotionIndex = $scope.emotionParam.emotionIndex;
            LEDParam.color = color;
            var LEDArray = [];
            LEDArray.push(LEDParam);
            dataService.command('emojiRealTime', LEDArray);
        }
    }]);
};
