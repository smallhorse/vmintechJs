var React = require('react');
var ReactDOM = require('react-dom');
var eventsListener = require('../common/events_listener');
var $ = require('jquery');

var RotateSpeedComponent = React.createClass({
    getInitialState: function() {
         return {
            speedList:["VS","S","M","F","VF"]

         };
    },
    componentDidMount: function() {
        // eventsListener.on('longPress',this._longPress);
    },
    render: function(){
        var items = this.state.speedList;
        var newArray = [];
        for(var i=0;i<items.length;i++){
            var item=items[i];
            newArray.push(<div className="col speed_type" key={i}><span>{item}</span></div>);
        }
        return  <div>
                    <div className="row rotateSpeed-box">
                        {newArray}
                    </div>
                    <div className="row speed_desc">{MSG.speed}:VF</div>
                </div>
                ;
    }
});
module.exports = RotateSpeedComponent;





