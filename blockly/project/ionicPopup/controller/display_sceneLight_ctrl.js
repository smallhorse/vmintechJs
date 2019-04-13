'use strict';

var jquery = require('jquery');
var ubtUtils = require('../../../engine/common/utils/utils');
require('../common/jquery-wheelcolorpicker')(jquery);
var blocklyDatas = require('../../../engine/service/blockly_datas');
module.exports = function (app) {
    //项目管理
    app.controller('sceneLightCtrl', ['$scope','$ionicModal','$timeout','$ionicPopup','dataService',function($scope, $ionicModal,$timeout,$ionicPopup,dataService) {
        //是否已连接
        $scope.ledLight = {link:true};
        //当前LED灯
        var curLight =  blocklyDatas.getLightsIds();
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
        $scope.emotions = ["deng","disco","caise","sanyuanse"];
        $scope.emotionsName = [MSG["id_deng"], MSG["id_disco"], MSG["id_caise"], MSG["id_sanyuanse"]];
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
            jquery('.face-box').css('border-color', '#EAEAEA');
            jquery('.color-box').css('display', 'none');
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
            jquery('.face-box').css('border-color', '#EAEAEA');
            jquery('.color-box').css('display', 'none');
            var color = '#'+jquery('#colorPicker').val();
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
                    jquery('.colorpicker').wheelColorPicker({
                        "layout":"block",
                        "sliders":"wv",
                        "preview":"true"
                    });
                    jquery('#colorPicker').on('color-setting', function(){
                        var selColor = "#"+jquery(this).val();
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
            var emotionBox = jquery('.face-box').eq(emotionIndex);
            emotionBox.css('border-color','#2dc6ec');
            var colorBox = emotionBox.find('.color-box');
            colorBox.css('background-color', emotionColor);
            colorBox.css('display','block');
            emotionColor = emotionColor.replace('#', '');
            jquery('#colorPicker').wheelColorPicker('setValue', emotionColor);
        }

        /**
         * 实时显示设置的表情
         * @param color         选择的颜色
         */
        $scope.sendCommand = function(color){
            var LEDParam = {};
            LEDParam.id = $scope.emotionParam.curLedVal;
            LEDParam.emotionIndex = $scope.emotionParam.emotionIndex+12;
            LEDParam.color = color;
            var LEDArray = [];
            LEDArray.push(LEDParam);
            dataService.command('emojiRealTime', LEDArray);
        }
    }]);
};
