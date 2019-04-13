var BlockInputContainer, BlockInputContinueButton, BlockShowSwift, BlockInputTitleBar, React;

React = require('react');

BlockInputContinueButton = require('./BlockInputContinueButton.jsx');

BlockInputContainer = require('./BlockInputContainer.jsx');

BlockInputTitleBar = require('./BlockInputTitleBar.jsx');
var blocklyUtils = require('./../common/utils/blockly_utils');
var BlockCodePretty = require('./block_code_pretty.jsx');
var BlockInputBottom = require('./block_input_bottom.jsx');
var BlockInputTitleBar1 = require('./block_input_titlebar.jsx');
var SensorConditionSwiftCode = require('./../common/condition/sensor_condition_swift_code');

BlockShowSwift = React.createClass({

    getInitialState: function() {
        return null;
    },
    componentDidMount: function() {
        /**
        if (this.props.block.getField("numLoops") !== null) {
        this.countKey = "numLoops";
        } else {
        this.countKey = "duration";
        }
        this.minCount = 1;//parseInt(this.props.block.getField(this.countKey).getOptions_()[0][1]);
        this.maxCount = 10;//parseInt(this.props.block.getField(this.countKey).getOptions_()[this.props.block.getField(this.countKey).getOptions_().length - 1][1]);
         */
        var sensorConditionSwiftCode = new SensorConditionSwiftCode();
        sensorConditionSwiftCode.initConditionAndCode(['program_goto_phone_condition','program_goto_touch_condition']);
        this.state = {
        };
        //this.state.updatedValues[this.countKey] = this.props.block.getFieldValue(this.countKey);
        return this.setState(this.state);
    },
    onContinue: function() {
        return this.props.onSuccess();
    },
    render: function() {
        if (this.state === null) {
            return <div></div>;
            //return React.createElement("div", null);
        } else {
            return  <div>
                        <BlockInputContainer onBackgroundTouched={this.onContinue}>
                        </BlockInputContainer>
                        <div id="count-container" className="input-modal white" style={{height:"80%", width:"80%"}}>
                            <BlockInputTitleBar1 showInfo="swift">
                            </BlockInputTitleBar1>
                            <div className="input-modal-body">
                                <BlockCodePretty>
                                </BlockCodePretty>                             
                            </div>
                            <BlockInputBottom type="swift_button" onBackgroundTouched={this.onContinue}/>                                               
                        </div>                
                    </div>;
        }
    }
});

module.exports = BlockShowSwift;