var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var MenuComponent = React.createClass({
    getInitialState: function() {
        return {
            arrMultiServoToPopup:this.props.arrMultiServoToPopup,
            callback:this.props.callback
        };
    },
    _menuItemSelect:function(item){
        console.log(item);
    },
    render: function(){
        // var dom = items.map(function (item) {
        //     return  <li key={item.servoId} >
        //                 <span className="menutext_class">{item.servoId}</span>
        //                 <span className="servoangle_span">{item.isClose ? item.angle +'°' : MSG.servo_angle_popup_close}</span>
        //             </li>;
        // });
        var items = this.state.arrMultiServoToPopup;
        var newArray = [];
        for(var i=0;i<items.length;i++){
            var item=items[i];
            var item_li = '<li key={item.servoId} onClick={this._menuItemSelect.bind(this.item)}>'+
                            '<span className="menutext_class">{item.servoId}</span>'+
                            '<span className="servoangle_span">{item.isClose ? item.angle : MSG.servo_angle_popup_close}</span>'+
                        '</li>';
            // newArray.push(item_li);
            newArray.push(<li key={item.servoId} onClick={this._menuItemSelect.bind(this,item)}><span className="menutext_class">{item.servoId}</span><span className="servoangle_span">{item.isClose ? item.angle +'°' : MSG.servo_angle_popup_close}</span></li>);
        }
        return  <div className="col col-20">
                    <ul className="menu_list">
                        {newArray}
                    </ul>
                </div>;
    }
});
module.exports = MenuComponent;