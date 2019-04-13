var React = require('react');
var ReactDOM = require('react-dom');

var TopMenuComponent = React.createClass({
    getInitialState: function() {
        return null;
    },
    render: function(){
        return  <div className="index_top_right_btn">
                    <div className="row">
                        <div className="col active" id="id_save" data-index1="0">
                            <img src="images/help/introduce/save_img.png"/>
                            <div>
                                <img src="images/help/introduce/arror2x.png" className="arror_img"/>
                                <img src="images/help/introduce/save.png" className="introduce_img save_img"/>
                            </div>
                        </div>
                        <div className="col" id="id_project" data-index1="1">
                            <img src="images/help/introduce/project_img.png"/>
                            <div>
                                <img src="images/help/introduce/arror2x.png" className="arror_img"/>
                                <img src="images/help/introduce/project.png" className="introduce_img project_img"/>
                            </div>
                        </div>
                        <div className="col" id="id_swift" data-index1="2">
                            <img src="images/help/introduce/swift_img.png"/>
                            <div>
                                <img src="images/help/introduce/arror2x.png" className="arror_img"/>
                                <img src="images/help/introduce/swift.png" className="introduce_img swift_img"/>
                            </div>
                        </div>
                        <div className="col">
                            <div></div>
                        </div>
                        <div className="col" id="id_help" data-index1="3">
                            <img src="images/help/introduce/help_img.png"/>
                            <div>
                                <img src="images/help/introduce/arror2x.png" className="arror_img"/>
                                <img src="images/help/introduce/help.png" className="introduce_img help_img"/>
                            </div>
                        </div>
                    </div>
                </div>;
    }
});
module.exports = TopMenuComponent;
