var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var SwitchComponent = React.createClass({
    getInitialState: function() {
        return {switch:'off'};;
    },
    switchChange:function(e){
    	e.stopPropagation(); 
    	// console.log(e.target.value);
    	if(e.target.value=="on"){
	    	$(".content-box").removeClass("box_diabled");
	    	this.setState({switch:'off'});
	    	this.props.callbackParent('off');
	    	// $(".content-box").addClass("box_diabled");
    	}else{
    		$(".content-box").addClass("box_diabled");
    		this.setState({switch:'on'});
    		this.props.callbackParent('on');
    		// $(".content-box").removeClass("box_diabled");
    	}
    },
    render: function(){
        return  <div className="row switch-box" >
	                <label className="toggle toggle-balanced">
	                    <input type="checkbox" onChange={this.switchChange} value={this.state.switch}/>
	                    <div className="track">
	                        <div className="handle"></div>
	                    </div>
	                </label>
	            </div>;
    }
});
module.exports = SwitchComponent;