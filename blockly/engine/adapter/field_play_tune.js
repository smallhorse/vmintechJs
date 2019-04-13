/**
 * Created by ubt on 2016/9/8.
 */

'use strict';

goog.require('Blockly.FieldPlayTune');
goog.require('Blockly.Field');

var $ = require('jquery');
var eventsListener = require('../common/events_listener');

Blockly.FieldPlayTune = function(value, opt_validator) {
    Blockly.FieldPlayTune.superClass_.constructor.call(this, value, opt_validator);
    this.setText(value);
    this.setValue(value);
};
goog.inherits(Blockly.FieldPlayTune, Blockly.Field);

Blockly.FieldPlayTune.prototype.setValue = function(value) {
    this._value = value;
};

Blockly.FieldPlayTune.prototype.getValue = function() {
    return this._value;
};

Blockly.FieldPlayTune.prototype.getText = function() {
    return this._value;
};

/**
 * render the block
 * @private
 */
Blockly.FieldPlayTune.prototype.showEditor_ = function() {
    var thisField = this;
    var callback = function(val) {
        if (thisField.validator_) {
             thisField.validator_(val);
        }
        eventsListener.trigger('canvas changed');
    };
    var block = this.sourceBlock_;
    var loadData = block.popupService();

    var dom = angular.element($("#bodyContent")).scope();
    dom.popupShow(block['popupKey'],loadData,callback);
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldPlayTune;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldPlayTune; });
} else {
    this.FieldPlayTune = Blockly.FieldPlayTune;
}