'use strict';

var jQuery = require('jquery');
require('../common/doughunt_chart')(jQuery);
require('../common/jquery-wheelcolorpicker')(jQuery);
var blocklyDatas = require('../../../engine/service/blockly_datas');
module.exports = function (app) {
    //setting light controller
    app.controller('lightSettingCtrl', ['$scope','$ionicModal','$timeout','$ionicPopup','dataService',function($scope, $ionicModal,$timeout,$ionicPopup,dataService) {
        //current LED chart
        $scope.ledPartArray = [];
        $scope.currentColorBlock='';
        $scope.colorBlock = ['#fe0000','#ff7f00','#fff000','#00ff01','#01ffff','#0000fe','#ff00fe','#50009f','#008040','#404040','#fe80fe','#ffffff'];
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
        //all LED data
        $scope.lightData = [];
        // single LED light parameters
        $scope.lightParam = {};

        $scope.initData = function(){
            //get the data from parameter
            $scope.lightData =  $scope.popupObject.inData;
            // set the output data from current page
            $scope.popupObject.outData = $scope.lightData;

            //判断当前灯光是否处于连接状态
            if($scope.lightData.length>0){
                //选中初始化
                var initObj = $scope.lightData[0];
                $scope.lightParam.id = initObj.id;
                $scope.lightParam.lights = initObj.lights;
                $scope.lightParam.curLedVal = initObj.id;
                $scope.lightParam.curLedIndex = 0;
                $scope.lightParam.ledPartSelected = 0;
                // 根据灯光id查询是否连接
                $scope.ledLight.link = isLink($scope.lightParam.id);
            }
            $scope.ledPartArray = angular.copy($scope.lightParam.lights);
            console.log("current LED chart: " + $scope.ledPartArray);
            // draw the LED part chart
            $scope.loadLedPartChart();
            $scope.sendCommand($scope.ledPartArray);
            $timeout(function(){
                $scope.$apply(function(){
                    jQuery('.colorpicker').wheelColorPicker({
                        "layout":"block",
                        "sliders":"wv",
                        "preview":"true"
                    });
                    jQuery('#colorPicker').on('color-setting', function(){
                        console.log("this value"+jQuery(this).val());
                        var selColor = "#"+jQuery(this).val();
                        var ledPartSelIndex = $scope.lightParam.ledPartSelected == undefined ? "0" : $scope.lightParam.ledPartSelected; // angular.element(document.getElementsByName('ledPartSelected')[0]).val() == "" ? "0":angular.element(document.getElementsByName('ledPartSelected')[0]).val();
                        var doughunt = document.getElementById('zone'+(parseInt(ledPartSelIndex)+1));
                        doughunt.setAttribute('stroke-width', 1);
                        doughunt.setAttribute('fill', selColor);
                        //angular.element(document.getElementsByName('ledPartSelected')[0]).val();
                        var curLedIndex = $scope.lightParam.curLedIndex // angular.element(document.getElementsByName('curLedIndex')[0]).val();
                        var LED = jQuery('.led-box')[curLedIndex];
                        jQuery('span',LED)[parseInt(ledPartSelIndex)+1].style.backgroundColor = selColor;

                        //save current LED part chart.
                        $scope.ledPartArray[ledPartSelIndex] = selColor;
                        $scope.lightData[$scope.lightParam.curLedIndex].lights = $scope.ledPartArray;

                        $scope.sendCommand($scope.ledPartArray);
                    });

                    $scope.renderAllColorBar();
                });
            });
        };

        jQuery('.color_table').on('click','span',function(){
            var index= jQuery(this).attr("data-index");
            console.log($scope.colorBlock[index-1]);
            jQuery(".color_table span").removeClass("active");
            jQuery(this).addClass("active");
            $scope.currentColorBlock = $scope.colorBlock[index-1];
        });

        /**
         * draw LED part chart
         */
        $scope.loadLedPartChart = function(){
            var data = [];
            for(var idx = 0; idx < $scope.ledPartArray.length; idx++){
                var part = {title:'', value:75, color:$scope.ledPartArray[idx]};
                data.push(part);
            }
            jQuery("#doughnutChart").empty();
            jQuery("#doughnutChart").drawDoughnutChart({percentage:50,displaySummary:false,showTips:false,
                //FIXME 考虑优化掉此处的代码，暂时用textPos这个参数解决Path显示文字的问题
                textPos:[{x:90,y:15},{x:115,y:40},{x:115,y:80},{x:90,y:105},{x:50,y:105},{x:25,y:80},{x:25,y:40},{x:50,y:15}],
                saveData:callback},data);
            /**
             * record the selected part of LED
             * @param e     event
             * @param pos   selected part
             */
            function callback(e, pos){
                // 如果在当前已选中的颜色区域再次选中，则取消上色
                var isCancel = (($scope.lightParam.ledPartSelected == pos) && ($scope.ledPartArray[pos] != '' ))? true:false;
                $timeout(function(){
                    $scope.$apply(function(){
                        $scope.lightParam.ledPartSelected = pos;
                    });
                });
                var parts = document.getElementsByClassName('dounghunt-unselected');
                for(var idx = 0; idx < parts.length; idx++){
                    parts[idx].setAttribute('stroke-width', 0.2);
                }
                // border the selected LED part and add the color
                // var selColor = '#'+jQuery('#colorPicker').val(); //'#'+window.myColor.colors.HEX
                var selColor =$scope.currentColorBlock;
                var fillColor = isCancel ?  '#FFFFFF' : selColor;
                var strokeWidth = isCancel ? 0.2 : 1;
                var strokeColor = isCancel ? '#0C1013' : '#D0DCDE';
                var doughunt = document.getElementById('zone'+(pos+1));
                doughunt.setAttribute('stroke', strokeColor);
                doughunt.setAttribute('stroke-width', strokeWidth);
                doughunt.setAttribute('fill', fillColor);

                // render color bar in the LED list
                var LED = jQuery('.led-box')[$scope.lightParam.curLedIndex];
                jQuery('span',LED)[pos+1].style.backgroundColor = (isCancel ? '' : fillColor);

                //save current LED part chart.
                $scope.lightParam.ledPartSelected = pos;
                $scope.ledPartArray[pos] = (isCancel ? '' : fillColor);
                $scope.lightData[$scope.lightParam.curLedIndex].lights = $scope.ledPartArray;
                console.log("led array===>");
                console.log($scope.ledPartArray);
                //取消上色时，不需要闪烁灯光
                if(!isCancel){
                    // $scope.sendCommand(fillColor);
                    $scope.sendCommand($scope.ledPartArray);
                }
            }

            $timeout(function(){
                $scope.$apply(function(){
                    $scope.renderSelectedColorBar();
                });
            });
        }

        $scope.renderAllColorBar = function(){
            for(var idx = 0 ; idx < $scope.lightData.length; idx ++){
                $scope.renderColorBar(idx, $scope.lightData[idx].lights);
            }
        }

        $scope.renderSelectedColorBar = function(){
            $scope.renderColorBar($scope.lightParam.curLedIndex, $scope.ledPartArray);
        }


        $scope.renderColorBar = function(LEDId, colorArray){
            console.log("load light, index is " + LEDId);
            var LED = jQuery('.led-box')[LEDId];
            var colorBarArray = jQuery('span',LED);
            for(var idx = 0; idx < colorArray.length; idx++){
                var color = colorArray[idx];
                jQuery('span',LED)[idx+1].style.backgroundColor = color;
            }
        }
        jQuery('.led_activebox').on('click','.checkbox1',function(){
            jQuery('.checkbox1').removeClass('active');
            jQuery(this).siblings().addClass('active');
            var data = jQuery(this).find(":nth-child(1)").attr("data-val");
            console.log(data);
            if(data =='on'){
                jQuery(".led-box").addClass('led-box-sel');
            }else{
                jQuery(".led-box").removeClass('led-box-sel');
            }
        });

        /**
         * switch LEd list
         * @param led       selected LED data
         * @param index     selected LED index
         */
        $scope.changeLight = function(led, index){
            // 根据灯光id查询是否连接
            $scope.ledLight.link = isLink(led.id);
            //save current LED part chart.
            $scope.lightData[$scope.lightParam.curLedIndex].lights = $scope.ledPartArray;

            //load selected LED part chart
            $scope.lightParam.curLedIndex = index;
            $scope.lightParam.curLedVal = $scope.lightData[index].id;
            $scope.ledPartArray = $scope.lightData[index].lights;
            // load the selected LED part chart
            $scope.loadLedPartChart();
            var selColor = '#'+jQuery('#colorPicker').val();
            $scope.sendCommand($scope.ledPartArray);
        }

        /**
         * 实时显示设置的灯光
         * @param LEDId         当前选择的LED灯
         * @param color         选择的颜色
         */
        $scope.sendCommand = function(colorArray){
            var LEDParam = {};
            var lights = ["","","","","","","",""];
            // lights[$scope.lightParam.ledPartSelected] = color;
            lights = colorArray;
            LEDParam.id = $scope.lightParam.curLedVal;
            LEDParam.lights = lights;
            var LEDArray = [];
            LEDArray.push(LEDParam);
            dataService.command('LEDRealTime', LEDArray);
        }

        $scope.initData();
    }]);
};
