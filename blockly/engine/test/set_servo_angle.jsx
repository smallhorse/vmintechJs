var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./popupbody_menu.jsx');
var SwitchComponent = require('./switch.jsx');
var MenuSelectComponent = require('./angle_variable_select.jsx');
var AngleComponent = require('./set_angle.jsx');
var VariableComponent = require('./set_variable.jsx');
var $ = require('jquery');

var ServoAngleComponent = React.createClass({
    getInitialState: function() {
        return {
            data_val:0,//0:角度，1：变量
            classname: 'content-box box_diabled',
            arrMultiServoToPopup:this.props.arrMultiServoToPopup,
            callback:this.props.callback
        };
    },
    goCancel:function(e) {
        if(e){
            e.stopPropagation();
        }
        return this.props.onRemove();
    },
    goSure:function(e) {
        if(e){
            e.stopPropagation();
        }
        return this.props.onRemove();
    },
    onChildChanged: function (data_val) {
       console.log(this.state.data_val);
       this.setState({data_val:data_val});
    },
    onSwitchchange:function(type){
       console.log("parent switch type "+type);
       var classname = 'content-box'+' ';
       if(type=='off'){
            classname += 'box_diabled';
       }else {
            classname = 'content-box'+' ';
       }
       this.setState({
            switch:type,
            classname: classname
        });
    },
    render: function(){
        let button = null;
        if (this.state.data_val== 0) {
            button = <AngleComponent/>;
        } else {
            button = <VariableComponent/>;
        }
        return  <div className="blockly_background">
                    <div className="blockly_popup">
                        <div className="blockly_popuphead">
                            <div className="model_title">
                                {MSG.servo_angle_popup_title}
                            </div>
                        </div>
                        <div className="blockly_popupbody row">
                            <Menu arrMultiServoToPopup={this.state.arrMultiServoToPopup} callback={this.state.callback}></Menu>
                            <div className="col col-80">
                                <div className="top-box">
                                    <MenuSelectComponent callbackParent={this.onChildChanged}></MenuSelectComponent>
                                    <SwitchComponent callbackParent={this.onSwitchchange}></SwitchComponent>
                                </div>
                                <div className={this.state.classname}>
                                    {button}
                                </div>
                            </div>
                        </div>
                        <div className="blockly_popupfooter">
                            <div className="btn-footer" onTouchEnd={this.goCancel}>{MSG.project_pop_cancel_btn}</div> 
                            <div className="btn-footer" onTouchEnd={this.goSure}>{MSG.project_pop_ok_btn}</div> 
                        </div>
                    </div>
                </div>;
    }
});
module.exports = ServoAngleComponent;