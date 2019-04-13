var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var MenuSelectComponent = React.createClass({
    getInitialState: function() {
        return null;
    },
    goAngle:function(e) {
        if(e){
            e.stopPropagation();
        }
        var data_val = $("#id_angle").attr("data-val");
        $("#id_angle").siblings().removeClass("active");
        $("#id_angle").addClass("active");
        this.props.callbackParent(data_val);
    },
    goVariable:function(e) {
        if(e){
            e.stopPropagation();
        }
        var data_val = $("#id_variable").attr("data-val");
        $("#id_variable").siblings().removeClass("active");
        $("#id_variable").addClass("active");
        this.props.callbackParent(data_val);
        console.log("data_val"+data_val);
    },
    render: function(){
        return  <div className="row menu_select">
                    <div id="id_angle" className="col col_center col_1" data-val="0" onTouchEnd={this.goAngle}>
                        {MSG.servo_angle_popup_angle}
                    </div>
                    <div id="id_variable" className="col col_center col_2" data-val="1" onTouchEnd={this.goVariable}>
                        {MSG.servo_angle_popup_variable}
                    </div>
                </div>;
    }
});
module.exports = MenuSelectComponent;