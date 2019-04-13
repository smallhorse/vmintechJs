var React = require('react');
var ReactDOM = require('react-dom');
var TopMenuComponent = require('./guide_menu.jsx');
var GuideMsgComponent = require('./guide_msg.jsx');
var GuideRun = require('./guide_run.jsx');
var $ = require('jquery');
var GuideComponent = React.createClass({
    getInitialState: function() {
        return null;
    },
    goSkip :function(e){
        if(e){
            e.stopPropagation();
        }
        return this.props.onRemove();
    },
    goNext : function(){
        var list = ['id_save','id_project','id_swift','id_help','id_excute'];
        var index = parseInt($("#guide_container .active").attr("data-index1"));
        console.log(index);
        if(index>3){
            $("#"+list[0]).addClass('active');
            this.goSkip();
        }
        $(".introduce_"+(index+1)).show();
        $(".introduce_"+(index+1)).siblings().hide();
        $("#"+list[index+1]).addClass('active');
        $("#"+list[index]).removeClass('active');
    },
    render: function(){
        console.log("guide log");
        return  <div id="blockly_guidediv" className="blockly_guide" onTouchEnd={this.goNext}>
                    <TopMenuComponent></TopMenuComponent>
                    <GuideMsgComponent></GuideMsgComponent>
                    <GuideRun></GuideRun>
                    <div className="ok_btn">
                        <span className="ok_span">OK</span>
                    </div>
                    <div className="skip_help" style={{'display': 'block'}}  onTouchEnd={this.goSkip}>
                        <span className="skip_btn">{MSG.go_skip}</span>
                    </div>
                </div>;
    }
});
module.exports = GuideComponent;