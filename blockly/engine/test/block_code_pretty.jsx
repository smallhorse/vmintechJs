var React = require('react');
var blocklyUtils = require('./../common/utils/blockly_utils');
module.exports = React.createClass({
  render: function() {
    var code = blocklyUtils.blockToSwiftInWorkspace();
    var no_null = code.replace(/\ /g,"&nbsp;");
    code = prettyPrintOne(no_null.replace(/\n/g, "<br>"),"js") ;
    return <div className="code_content" dangerouslySetInnerHTML={{__html:code}} ></div>;
  }
});