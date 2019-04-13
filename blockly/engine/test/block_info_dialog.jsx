var React = require('react');
var BlockInputContainer = require('./BlockInputContainer.jsx');
var BlockInputTitleBar1 = require('./block_input_titlebar.jsx');
var BlockInputBottom = require('./block_input_bottom.jsx');
var BlockInfoDialog = React.createClass({

    getInitialState : function() {
        return null;
    },
    componentDidMount: function() {
        this.state = {
        };
        return this.setState(this.state);
    },
    onContinue: function() {
        return this.props.onSuccess();
    },
    render: function() {
        if(this.state === null) {
            return <div></div>;
        } else {
            return <div className="blockly_background" style={{padding:"18% 8%"}} onBackgroundTouched={this.onContinue} >
                        {/**<BlockInputContainer onBackgroundTouched={this.onContinue}></BlockInputContainer>} */}
                        {/**<div id="count-container" className="input-modal white" style={{height:"40%", width:"80%"}}>*/}
                        <div className="blockly_popup">
                            <BlockInputTitleBar1 showInfo="提示">
                            </BlockInputTitleBar1>
                            <div className="blockly_popupbody row">                             
                                   <div style={{color:"#000",width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>{this.props.showInfo}</div>                       
                            </div>
                            <BlockInputBottom onBackgroundTouched={this.onContinue}/> 
                        </div>
                   </div>;
        }
    }
});
module.exports = BlockInfoDialog;