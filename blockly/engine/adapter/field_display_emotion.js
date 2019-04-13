/**
 * Created by ubt on 2016/9/8.
 */

'use strict';

goog.require('Blockly.FieldDisplayEmotion');
goog.require('Blockly.Field');

var $ = require('jquery');
var eventsListener = require('../common/events_listener');

Blockly.FieldDisplayEmotion = function(text, value, opt_validator) {
    Blockly.FieldDisplayEmotion.superClass_.constructor.call(this, text, opt_validator);
    this.setText(text);
    this.setValue(value);
};
goog.inherits(Blockly.FieldDisplayEmotion, Blockly.Field);

Blockly.FieldDisplayEmotion.prototype.setValue = function(value) {
    this._value = value;
};

Blockly.FieldDisplayEmotion.prototype.getValue = function() {
    return this._value;
};

/**
 * render the block
 * @private
 */
Blockly.FieldDisplayEmotion.prototype.showEditor_ = function() {
    var thisField = this;
    var callback = function(param) {
        console.log('返回值');
        console.log(param);
        if (thisField.validator_) {
             thisField.validator_(param);
        }
        eventsListener.trigger('canvas changed');
    };
    var block = this.sourceBlock_;
    var arrMultiServoToPopup = block.popupService();

    var dom = angular.element($("#bodyContent")).scope();
    console.log('传出的值');
    console.log(arrMultiServoToPopup);
    dom.popupShow(block['popupKey'],arrMultiServoToPopup,callback);

    //var dom = angular.element($("#bodyContent")).scope();
    //dom.popupShow("emotionDisplay");
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldDisplayEmotion;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldDisplayEmotion; });
} else {
    this.FieldDisplayEmotion = Blockly.FieldDisplayEmotion;
}