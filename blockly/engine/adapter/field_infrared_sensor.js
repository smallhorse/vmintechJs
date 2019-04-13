/**
 * Created by ubt on 2016/9/8.
 */

'use strict';

goog.require('Blockly.FieldInfraredSensor');
goog.require('Blockly.Field');

var $ = require('jquery');
var eventsListener = require('../common/events_listener');

Blockly.FieldInfraredSensor = function(value, opt_validator) {
    Blockly.FieldInfraredSensor.superClass_.constructor.call(this, value, opt_validator);
    this.setValue(value);
    this.setText(value);
};
goog.inherits(Blockly.FieldInfraredSensor, Blockly.Field);

/**
 * render the block
 * @private
 */
Blockly.FieldInfraredSensor.prototype.setValue = function(val){
    this._value = val;
}

Blockly.FieldInfraredSensor.prototype.getValue = function(){
    return this._value;
}

Blockly.FieldInfraredSensor.prototype.getText = function(key){
    return this._value;
}

Blockly.FieldInfraredSensor.prototype.showEditor_ = function() {
    var thisField = this;
    var callback = function(param) {
        if (thisField.validator_) {
            thisField.validator_(param);
        }
        eventsListener.trigger('canvas changed');
    };
    var block = this.sourceBlock_;
    var loadInfraredSensor = block.popupService();

    var dom = angular.element($("#bodyContent")).scope();
    dom.popupShow("infraredSensor", loadInfraredSensor, callback);
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldInfraredSensor;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldInfraredSensor; });
} else {
    this.FieldInfraredSensor = Blockly.FieldInfraredSensor;
}