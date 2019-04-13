/**
 * Created by ubt on 2016/9/8.
 */

'use strict';

goog.require('Blockly.FieldGyroscopeAngleAdapter');
goog.require('Blockly.Field');

var $ = require('jquery');
var eventsListener = require('../common/events_listener');

Blockly.FieldGyroscopeAngleAdapter = function(value, opt_validator) {
    Blockly.FieldGyroscopeAngleAdapter.superClass_.constructor.call(this, value, opt_validator);
    var text = MSG[value];
    this.setText(text);
    this.setValue(value);
};
goog.inherits(Blockly.FieldGyroscopeAngleAdapter, Blockly.Field);

Blockly.FieldGyroscopeAngleAdapter.prototype.setValue = function(value) {
    this._value = value;
};

Blockly.FieldGyroscopeAngleAdapter.prototype.getValue = function() {
    return this._value;
};

Blockly.FieldGyroscopeAngleAdapter.prototype.getText = function() {
    return MSG[this._value]; 
};

/**
 * render the block
 * @private
 */
Blockly.FieldGyroscopeAngleAdapter.prototype.showEditor_ = function() {
    var thisField = this;
    var callback = function(index) {
        if (thisField.validator_) {
             thisField.validator_(index);
        }
        eventsListener.trigger('canvas changed');
    };
    var block = this.sourceBlock_;
    var arrMultiServoToPopup = block.popupService();

    var dom = angular.element($("#bodyContent")).scope();
    dom.popupShow(block['popupKey'],arrMultiServoToPopup,callback);
    //dom.popupShow("deviceTilt");
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldGyroscopeAngleAdapter;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldGyroscopeAngleAdapter; });
} else {
    this.FieldGyroscopeAngleAdapter = Blockly.FieldGyroscopeAngleAdapter;
}