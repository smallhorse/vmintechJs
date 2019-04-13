var React = require('react');
var ReactDOM = require('react-dom');
var eventsListener = require('../common/events_listener');
var $ = require('jquery');

var AngleComponent = React.createClass({
    getInitialState: function() {
         return {
            timer:0,
            angle:0
         };
    },
    componentDidMount: function() {
        // eventsListener.on('longPress',this._longPress);
    },
    angleAdjust:function(type){
        this._setAngle(type);
    },
    _longPress:function(type){
        var that = this;
        this.state.timer = setInterval(function(){  
            that._setAngle(type);
        }, 200);
    },
    _longPressEnd:function(e){
        e.stopPropagation();  
        clearInterval(this.state.timer);
    },
    _setAngle:function(type){
        var switch_state = $(".toggle-balanced>input").val();
        if(switch_state=='off'){
            return ;
        }else{
            var angle =  this.state.angle;
            if(type=='reduce'){
                angle=angle-6;
            }
            if(type=='add'){
                angle=angle+6;
            }
            if(angle>118){
                return ;
            }else if(angle<-118){
                return ;
            }else {
                this.setState({angle:angle});
                this._setImgRoate(angle);
            }
        }
    },
    _setImgRoate:function(rotate){
        var imgObj = document.getElementById("servoAngleImage");
        if(imgObj!=null&&imgObj.style){
            imgObj.style.transform="rotate("+parseInt(rotate)+"deg)";
            imgObj.style.webkitTransform="rotate("+parseInt(rotate)+"deg)";
            imgObj.style.MozTransform="rotate("+parseInt(rotate)+"deg)";
            imgObj.style.msTransform="rotate("+parseInt(rotate)+"deg)";
            imgObj.style.OTransform="rotate("+parseInt(rotate)+"deg)";
        }
    },
    render: function(){
        return  <div className="angle_val_box">
                    <div className="row angle_box">
                        <div className="col-20 adjust-box" onClick={this.angleAdjust.bind(this,'reduce')} onTouchStart={this._longPress.bind(this,'reduce')} onTouchEnd={this._longPressEnd}>
                            <i className="icon ion-ios-minus reduce-icon"></i>
                        </div>
                        <div className="col-60">
                            <div className="img-box">
                                <img id="servoAngleImage" src="images/index/Servo.png"/>
                            </div>
                        </div>
                        <div className="col-20 adjust-box" onClick={this.angleAdjust.bind(this,'add')} onTouchStart={this._longPress.bind(this,'add')} onTouchEnd={this._longPressEnd}>
                            <i className="icon ion-ios-plus add-icon"></i>
                        </div>
                    </div>
                    <div className="row value-box">
                        <label>{this.state.angle}°</label>
                    </div>
                </div>;
    }
});
module.exports = AngleComponent;





