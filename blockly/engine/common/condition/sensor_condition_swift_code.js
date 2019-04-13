/* @preserve
 *
 *
 * Copyright (c) 2016 UBT Company
 *
 *
 */

/**
 * sensor_condition_swift_code.js version 1.0
 *
 *  sensor_condition_swift_code feature
 *  传感器值条件类
 *
 * feature sensor_condition_swift_code feature
 *
 */
'use strict';
(function() {
    var ubtBlocklyUtils = require('./../../common/utils/blockly_utils');
    var SensorCondition = require('./sensor_condition');
    var codeLanguage = require('./../../common/program/program_init');
    var _ = require('lodash');
    function SensorConditionSwiftCode() {
        this.conditionArray = [];
        this.dataCode = {};
    }

    SensorConditionSwiftCode.prototype.initConditionAndCode = function(typeArray) {
        var length = typeArray.length;
        var resultBlock = [];
        for (var i = 0 ;  i < length ; i++) {
             var conditionSensorBlock = ubtBlocklyUtils.findBlocksByType(typeArray[i]);
             resultBlock = _.union(resultBlock,conditionSensorBlock);
        }
        for (var i = 0 ; i< resultBlock.length; i++) {
            var block = resultBlock[i];
		    if (block.disabled == true) {
			    continue;
		    }
		    var sensor = block.getFieldValue('SENSOR');
            var operator = block.getFieldValue('OP');
            var value = block.getFieldValue('VALUE');
            var sensorId = block.getFieldValue('SENSOR_ID');
            var branchId = block.getFieldValue('PROGRAM_BRANCH');
            var sensorCondition = new SensorCondition(sensor, operator , value, sensorId,branchId);
		    this.conditionArray.push(sensorCondition);
            var swiftCode = Blockly.Swift.blockToCodeInWorkspace(block,codeLanguage.workspace);
            this.dataCode[branchId] = swiftCode;
        }
    };

    /**
     * 返回分支对应的代码
     */
    SensorConditionSwiftCode.prototype.getCodeByBranchId = function(branchId) {
        if (this.dataCode[branchId]) {
            return this.dataCode[branchId];
        }
        return '';
    };

    /**
     * 返回所有的条件数组
     */
    SensorConditionSwiftCode.prototype.getConditionArray = function() {
        return this.conditionArray;
    }

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = SensorConditionSwiftCode;
    } else if (typeof define === 'function' && define.amd) {
        define(function () { return SensorConditionSwiftCode; });
    } else {
        this.SensorConditionSwiftCode = SensorConditionSwiftCode;
    }

}).call(this);