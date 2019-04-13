/* @preserve
 * 
 * 
 * Copyright (c) 2016 UBT Company
 *
 * 
 */

/**
 * interactiveMethods.js version 1.0
 * 
 * 功能 ：js与IOS或者android交互的模块(主要用于IOS或者android回调 js)
 * 
 * feature js interact with IOS or Android;
 * 
 */
'use strict';

;(function() {
 
    var eventsListener = require('./../../../engine/common/events_listener');
    var React = require('react');
    var ReactDOM = require('react-dom');
    var BlockInfaredSensorShower = require('./block_infared_sensor_shower.jsx');
    var programManager = require('./../../../engine/common/program/program_manager');
    var ubtUtils = require('./../../../engine/common/utils/utils');
    var RobatCommand = require('./../../../engine/service/robat_command');
    var blocklyDatas = require('./../../../engine/service/blockly_datas');
    var api = require('./../../../engine/API');
    var blocklyUtils = require('./../../../engine/common/utils/blockly_utils');
    var _ = require('lodash');
    var isExecute = true;

    /**
     * When running a program, the {ProgramRunner} will wait for this method to be called before executing the next step.
     */
    window.continueSteps = function(branchId){
        console.log('callback branchId:'+branchId);
        var timer = blocklyDatas.getDataByKey('currentTime');
        if (window.blocklyObj && window.blocklyObj.logDebug) {
            window.blocklyObj.logDebug('block finish command, cost time:'+ timer.timeElapsed() +' unit.');
        }
        var programRunnerIndex = '';
        if (branchId &&　!isNaN(branchId)) {
            programRunnerIndex = branchId;
        } else {
            programRunnerIndex = programManager.getProgramRunnerIndex();
        }  
        // var programRunnerIndex = programManager.getProgramRunnerIndex();
        console.log('next_step'+programRunnerIndex);
        eventsListener.trigger('next_step' + programRunnerIndex);
    };

    window.nextFn = function(){    
        eventsListener.trigger('next_function');
    };

    window.showException = function(exception){
        console.log('exception:'+ exception);    
        if (exception) {
            eventsListener.trigger("stop_execution");
            if (exception =='ReceiveMemoryWarning') {
                eventsListener.trigger("infnite_loop_error");
            } 
        }
    };

    //修改轮模式舵机后的回调函数
    window.refreshAllServo = function(param) {
        var allServo = JSON.parse(param);
        var commonServo = allServo['commonServo'];
        var circleServo = allServo['circleServo'];
        blocklyDatas.setKeyData('servos', commonServo);
        blocklyDatas.setKeyData('circleServos', circleServo);
        //初始化普通舵机和轮模式舵机
        blocklyDatas.initServosId();
        blocklyDatas.initCircleServosId();

        //遍历工作空间的块，判断是否属于合法的块
        blocklyUtils.iterateBlocks(function(block){
            if (block.type == 'movement_servo_rotate_circle') {
                //获取轮模式舵机的信息
                var servoGroup = block.getFieldValue('servoGroup');
                if(servoGroup.indexOf('#') > -1) {
                    return;
                }
                var servoInfoArr  = JSON.parse(servoGroup);
                //程序块中的轮模式舵机
                var circleServoIds = [];
                for (var i = 0; i < servoInfoArr.length; i++) {
                    circleServoIds.push(servoInfoArr[i]['servoId']);
                }
                var currentCircleServoId = blocklyDatas.getCircleServosIds();
                //获取这两个集合的交集，如果交集与当前的的块的值一样，则这个块是可以使用的，否则灰掉这个块
                var unionResultId = _.intersection(circleServoIds, currentCircleServoId);
                if (!_.isEqual(unionResultId, circleServoIds)) {
                    block.setDisabled(true);
                } else {
                    block.setDisabled(false);
                }
            }

            if (block.type == 'movement_servo_change_angle_multi') {
                //获取舵机的信息
                var servoGroup = block.getFieldValue('servoGroup');
                var servoInfoArr  = servoGroup.split(',');
                //程序块中的舵机
                var servoIds = [];
                for (var i = 0; i < servoInfoArr.length; i++) {
                    servoIds.push(servoInfoArr[i].split(':')[0]);
                }
                var currentServoId = blocklyDatas.getServoIds();
                //获取这两个集合的交集，如果交集与当前的的块的值一样，则这个块是可以使用的，否则灰掉这个块
                var unionResultId = _.intersection(servoIds, currentServoId);
                if (!_.isEqual(unionResultId, servoIds)) {
                    block.setDisabled(true);
                } else {
                    block.setDisabled(false);
                }
            }

            if (block.type == 'sensor_servo_angle') {
                //获取当前块的舵机信息
                var sensorId = block.getFieldValue('SENSOR_ID');  
                var currentServoId = blocklyDatas.getServoIds();
                //获取这两个集合的交集，如果交集与当前的的块的值一样，则这个块是可以使用的，否则灰掉这个块
                var isContain = _.includes(currentServoId, sensorId);
                if (!isContain) {
                    block.setDisabled(true);
                } else {
                    block.setDisabled(false);
                }
            }
        });

    };

    /**
     * @branchId 程序的分支ID， 
     * @jsonParam 传递给小胡的参数
     */
    window.sensorCallback = function(branchId, jsonParam) {
        console.log(branchId);
        console.log(jsonParam);
        //一旦接受到跳转到其他分支的命令，则直接停止机器人
        var stopRobatCommand = new RobatCommand('stopRobot');
        stopRobatCommand.send();
        if (blocklyDatas.getDataByKey('programRunning')) {
            //blocklyDatas.setKeyData('forward_another',true);
            eventsListener.once('forward_another', function() {
                api.wwGotoConditionStart(branchId);
            });
            eventsListener.trigger("stop_execution"); 
        } else {
            api.wwGotoConditionStart(branchId);
        }  
    };

    /**
     * 返回blockly的当前版本，此版本记录了有多少个块的信息
     */
    window.getBlocklyVersion = function() {
        return Blockly.Blocks.version;
    };

    //iOS 或者Java调用js显示最新的红外传感器的值
    /**
     * parameters 最新的传感器的值
     */
    window.showInfraredRef = function(ref) {
       var  new_ref = decodeURI(ref);
       //console.log(showObj.isCanShowAll);
       if (showObj.isCanShowAll) {
           ReactDOM.render(React.createElement(BlockInfaredSensorShower,
         {infraredValue: new_ref, showStatus:true}), document.getElementById("infoShower"));
       }
       
       /**
       var resultJson = JSON.parse(new_ref);
       var condition = blocklyDatas.getDataByKey('sensor_condition');
       if (!condition) {
           return;
       }
       var operator = condition['operator'];
       var sensorType = condition['sensorType'];
       var value = condition['value'];
       if (value == 0) {
           return;
       }
       if (operator == 'GT' && resultJson[sensorType]) {
           if (resultJson[sensorType][0]['result'] > value && blocklyDatas.getDataByKey('forward_another') == undefined) {
               
               if (blocklyDatas.getDataByKey('programRunning')) {
                    blocklyDatas.setKeyData('forward_another',true);
                    console.log('绑定大于跳转程序的事件');
                    eventsListener.on('forward_another', function() {
                        api.wwGotoConditionStart();
                    });
                   eventsListener.trigger("stop_execution"); 
               } else {
                   api.wwGotoConditionStart();
               }             
           }
       } else if (operator == 'LT' && resultJson[sensorType]) {
           if (resultJson[sensorType][0]['result'] < value && blocklyDatas.getDataByKey('forward_another') == undefined) {      
               if (blocklyDatas.getDataByKey('programRunning')) {
                    blocklyDatas.setKeyData('forward_another',true);
                    console.log('绑定小于跳转程序的事件');
                    eventsListener.on('forward_another', function() {
                        api.wwGotoConditionStart();
                    });
                   eventsListener.trigger("stop_execution"); 
               } else {
                   api.wwGotoConditionStart();
               }
           }
       } else if (operator == 'EQ' && resultJson[sensorType]) {
           if (resultJson[sensorType][0]['result'] == value && blocklyDatas.getDataByKey('forward_another') == undefined) {
               
               if (blocklyDatas.getDataByKey('programRunning')) {
                   blocklyDatas.setKeyData('forward_another',true);
                    console.log('绑定等于跳转程序的事件');
                    eventsListener.on('forward_another', function() {
                        api.wwGotoConditionStart();
                    });
                   eventsListener.trigger("stop_execution"); 
               } else {
                   api.wwGotoConditionStart();
               }
           }
       } else if (operator == 'NEQ' && resultJson[sensorType]){
           if (resultJson[sensorType][0]['result'] != value && blocklyDatas.getDataByKey('forward_another') == undefined) {
               
               if (blocklyDatas.getDataByKey('programRunning')) {
                   blocklyDatas.setKeyData('forward_another',true);
                   console.log('绑定不等于跳转程序的事件');
                   eventsListener.on('forward_another', function() {
                        api.wwGotoConditionStart();
                   });
                   eventsListener.trigger("stop_execution"); 
               } else {
                   api.wwGotoConditionStart();
               }
           }
       }
        */
        
       
         /**
         if (ref < 2000 && isExecute) {
             console.log(1);
             var stopRobatCommand = new RobatCommand('stopRobot');
             stopRobatCommand.send();
             isExecute = false;
             //window.continueSteps();
         } else if (ref >= 2000 ) {
             console.log(2);
             isExecute = true;
         }
          */
        /**
        var level = covertInfraredValueToLevel(ref);
        if (runningTimeClick) {
            window.showDistance(level,'open');  
        } else {
            window.popupInfraredValue(level);
        }
         */
    };

    function InteractiveMethods () {

    };



    InteractiveMethods.timerValue = 0;
    InteractiveMethods.startInfaredTimerCallback = function () {
        var random = ubtUtils.generateRandom(1000,2500);
        window.showInfraredRef(random);
        this.timerValue = setTimeout('InteractiveMethods.startInfaredTimerCallback()',1000);
    };

    InteractiveMethods.stopInfaredTimerCallback = function () {
          console.log('888888888');
          clearTimeout(this.timerValue);
    };

    var ContainGoBack = {
        isContain : false
    };

    InteractiveMethods.setContainGoBack = function(isContain) {
        ContainGoBack.isContain = isContain;
    };

    InteractiveMethods.isContainGoBack = function() {
        return ContainGoBack.isContain;
    };


    //是否应该显示所有传感器的信息
    var showObj = {
        isCanShowAll : false
    }
    InteractiveMethods.setIsCanShowAll = function(isCanShowAll) {
        showObj.isCanShowAll = isCanShowAll;
    }

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = InteractiveMethods;
        window.InteractiveMethods = InteractiveMethods;
    } else if (typeof define === 'function' && define.amd) {
        define(function() { return InteractiveMethods; });
    } else {
        this.interactiveMethods = InteractiveMethods;
    }



}).call(this);