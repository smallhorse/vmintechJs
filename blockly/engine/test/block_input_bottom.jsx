var React = require('react');
var RobatCommand = require('./../service/robat_command');
module.exports = React.createClass({
    backgroundTouched: function(e) {
        e.stopPropagation();
        return this.props.onBackgroundTouched();
    },

    setServoMode :function(e) {
        var setServoModeCommand = new RobatCommand('setServoMode');
        //调用弹出轮模式和普通舵机的切换页面
        setServoModeCommand.send();
        this.backgroundTouched(e);
    },
    render: function(){
        if (this.props.type == 'swift_button') {
            return <div className="modal-buttons">
                    {/*
                    <button className="btn btn-cancel" onTouchEnd={this.backgroundTouched}>{MSG['project_pop_cancel_btn']}</button>
                    */}
                        <button className="btn_one" onTouchEnd={this.backgroundTouched}>{MSG['project_pop_ok_btn']}</button>    
                   </div>;
        } else {
            // return <div className="modal-buttons">
            //            <button className="btn btn-cancel" onTouchEnd={this.backgroundTouched}>{MSG['project_pop_cancel_btn']}</button>
            //            <button className="btn btn-ok" onTouchEnd={this.setServoMode}>{MSG['set_servo_mode']}</button>    
            //        </div>;
            return <div className="blockly_popupfooter">
                        <div className="btn-footer" onTouchEnd={this.backgroundTouched}>{MSG['project_pop_cancel_btn']}</div> 
                        <div className="btn-footer" onTouchEnd={this.setServoMode}>{MSG['set_servo_mode']}</div> 
                    </div>;
        }
        
    }
});