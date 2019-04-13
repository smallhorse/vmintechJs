var React = require('react');

module.exports = React.createClass({

    render: function(){
        // return <div id="block-input-title-bar" className="input-modal-title1 ribbon">
        //            <h3>{this.props.showInfo}</h3>
        //            <div></div>
        //        </div>;
        return <div className="blockly_popuphead">
                    <div className="model_title">
                        {this.props.showInfo}
                    </div>
                </div>;
    }
});