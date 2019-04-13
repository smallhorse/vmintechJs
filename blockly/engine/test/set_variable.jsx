var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var VariableComponent = React.createClass({
    getInitialState: function() {
        return null;
    },
    render: function(){
        return  <div className="variable_box" >
                    <span className="variable_item">
                        变量x
                    </span>
                    <span className="variable_item">
                        变量y
                    </span>
                    <span className="variable_item">
                        变量y
                    </span>
                    <span className="variable_item">
                        变量y
                    </span>
                    <span className="variable_item">
                        变量y
                    </span>
                    <span className="variable_item">
                        变量y
                    </span>
                    <span className="variable_item">
                        变量y
                    </span>
                </div>;
    }
});
module.exports = VariableComponent;