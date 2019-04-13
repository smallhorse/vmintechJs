
'use strict';
var createFunctionString = require('../../engine/common/utils/create_function_string');
var ubtUtils = require('../../engine/common/utils/utils');
module.exports = function(Swift) {
  Swift['id_show_play_effects'] = function (block) {
    var text_effect = block.getFieldValue('Effect');
    // TODO: Assemble Swift into code variable.
    var code = 'playEffect(' + text_effect + ')\n';
    return code;
  };

  Swift['id_show_play_tune'] = function (block) {

    var text_tune = block.getFieldValue('Tune');
    // TODO: Assemble Swift into code variable.
    var code = 'palyTune(' + text_tune + ')\n';
  
    return code;
  };

  Swift['id_show_emoji'] = function (block) {
    var text_emotion = block.getFieldValue('Emotion');
    var value_input = Blockly.Swift.valueToCode(block, 'value_input', Blockly.Swift.ORDER_ATOMIC);
    // TODO: Assemble Swift into code variable.
    var code = 'showEmotion(emoji:' + text_emotion + ', times:' + value_input + ')\n';
    return code;
  };

  Swift['id_show_led'] = function (block) {

    var text_light = block.getFieldValue('Light');
    var value_name = Blockly.Swift.valueToCode(block, 'value_input', Blockly.Swift.ORDER_ATOMIC);
    // TODO: Assemble Swift into code variable.
    var code = 'showLEDs(color:' + text_light + ', ms:' + value_name + ')\n';
    return code;
  }

};