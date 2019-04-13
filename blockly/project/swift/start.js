'use strict';
var createFunctionString = require('../../engine/common/utils/create_function_string');
var ubtUtils = require('../../engine/common/utils/utils');
module.exports = function(Swift) {
    Swift['program_start'] = function(block) {
        var code = 'runProgram()\n';
        return code;
    };

    Swift['program_goto_start'] = function(block) {
        var code ='runProgramAgain()\n';
     	return code;
    };

    Swift['statement_emotion_rgb_all_color_picker'] = function(block) {
        return '';
    };

    Swift['program_goto_condition'] = function(block) {
        var code ='when condition satisfied\n';
        return code;
    };

    Swift['program_goto_phone_condition'] = function(block) {
       var code ='when phone condition satisfied\n';
        return code;
    };

    Swift['program_goto_touch_condition'] = function(block) {
        var code ='when touch condition satisfied\n';
        return code;
    };

};