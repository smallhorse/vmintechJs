var React = require('react');
var ReactDOM = require('react-dom');
var eventsListener = require('../common/events_listener');
var $ = require('jquery');

var RotateIconComponent = React.createClass({
    getInitialState: function() {
         return {
            timer:0,
            angle:0
         };
    },
    componentDidMount: function() {
        // eventsListener.on('longPress',this._longPress);
    },
    render: function(){
        return  <div className="row rotateIcon-box">
                    <div className="col-33">
                        <div className="shunshizhen">
                            <i className="icon ion-android-refresh"></i>
                        </div>
                        <div className="shunshizhen">
                            <span className="text-desc">{MSG.rotate_servo_popup_clockwise}</span>
                        </div>
                    </div>
                    <div className="col-33">
                        <div className="shunshizhen">
                            <i className="icon ion-stop"></i>
                        </div>
                        <div className="shunshizhen">
                            <span className="text-desc">{MSG.rotate_servo_popup_stop}</span>
                        </div>
                    </div>
                    <div className="col-33">
                        <div className="xuanzhuanziti">
                            <i className="icon ion-android-refresh"></i>
                        </div>
                        <div className="shunshizhen">
                            <span className="text-desc">{MSG.rotate_servo_popup_anti_clockwise}</span>
                        </div>
                    </div>
                </div>;
    }
});
module.exports = RotateIconComponent;





