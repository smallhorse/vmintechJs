/**
 * Created by ubt on 2016/9/8.
 */

'use strict';

goog.require('Blockly.Field');

var $ = require('jquery');
var messageDialog = require('./../common/dialog/message_dialog');
var blocklyDatas = require('./../service/blockly_datas');

Blockly.FieldDefaultIdAdapter = function(text, opt_validator, popupKey) {
    Blockly.FieldDefaultIdAdapter.superClass_.constructor.call(this, text, opt_validator);
    this.setText(text);
    this.popupKey = popupKey;
};
goog.inherits(Blockly.FieldDefaultIdAdapter, Blockly.Field);


/**
 * render the block
 * @private
 */
Blockly.FieldDefaultIdAdapter.prototype.showEditor_ = function() {
    var blueStatus =  blocklyDatas.getDataByKey('blueState');
    if (!blueStatus || blueStatus =='0') {
        var dom = angular.element($("#bodyContent")).scope();
		dom.indexBus('blueConnect');
        return;
    }
    var block = this.sourceBlock_;
    if (this.popupKey == 'infrared') {
        var dom = angular.element($("#bodyContent")).scope();
         dom.systemHintShow(MSG['infrared_tips'],'error');
        //messageDialog.alertDialog('红外传感器围连接，请连接。');
    }
    if (this.popupKey == 'touch') {
        var dom = angular.element($("#bodyContent")).scope();
         dom.systemHintShow(MSG['touch_tips'],'error');
        //messageDialog.alertDialog('红外传感器围连接，请连接。');
    }

    if (this.popupKey == 'gyroscope') {
        var dom = angular.element($("#bodyContent")).scope();
         dom.systemHintShow(MSG['gyroscope_tips'],'error');   
    }
    if (this.popupKey == 'servo') {
        var dom = angular.element($("#bodyContent")).scope();
         dom.systemHintShow(MSG['speed_only_360_value'],'error');  
    }
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldDefaultIdAdapter;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldDefaultIdAdapter; });
} else {
    this.FieldDefaultIdAdapter = Blockly.FieldDefaultIdAdapter;
}