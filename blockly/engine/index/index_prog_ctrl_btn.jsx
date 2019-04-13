var React = require('react');
var ReactDOM = require('react-dom');
var programRunner = require('../common/program/program_runner');
var programManager = require('../common/program/program_manager');
var ubtBlocklyUtils = require('../common/utils/blockly_utils');
var eventsListener = require('../common/events_listener');
var InteractiveMethod = require('../../project/ionicPopup/common/interactive_methods');
//var BlockInputContainer = require('../block_input_container.jsx');
var RobatCommand = require('../service/robat_command');
var blocklyDatas = require('../service/blockly_datas');
var codeLanguage = require('../common/program/program_init');
var Background = require('./index_prog_background.jsx');
var $ = require('jquery');
var _ = require('lodash');
var SensorCondition = require('./../common/condition/sensor_condition');

var ProgCtrlButton = React.createClass({
	getInitialState : function(){
		return {			
			isRunning:this.props.isRunning == 'false' ? false: true
		}
	},

	componentDidMount: function() {
	console.log("componentDidMount 绑定事件");
      eventsListener.on('changeState',this._changeRunningState);
	  eventsListener.on('canvas changed',this._saveProgram);
	  eventsListener.on("stop_execution", this._stopProgramExecution); 
	  eventsListener.on("start_background", this._startBackGround); 
	  eventsListener.on("add_event_sensor_listener", this._addSensorConditionListener);
	  eventsListener.once("infnite_loop_error", this._infniteLoopError);  
	  eventsListener.on("control_block_status", this._controlBlockStatus);    
   },

   _controlBlockStatus :function(flag) {
	   ubtBlocklyUtils.setAllBlocksEditable(flag);
	   ubtBlocklyUtils.setAllBlocksMovable(flag);
   },

   _infniteLoopError : function () {
	  var dom = angular.element($("#bodyContent")).scope();
	  dom.showAlert({'content':MSG['id_infinite_loop_error'],'btnText':MSG['porject_alert_btnText']});
   },

   componentWillUnmount: function() {
      eventsListener.off('changeState');
	  eventsListener.off('canvas changed'); 
	  eventsListener.off("stop_execution"); 
	  eventsListener.off("start_background");   
	  eventsListener.off("add_event_sensor_listener");  
	  eventsListener.off("infnite_loop_error");
	  eventsListener.off("control_block_status");      
   },

   _saveProgram : function() {
      console.log("_saveProgram 更新xml内容");
      var currentProgramContent = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(codeLanguage.workspace));
      //console.log("_saveProgram 更新xml内容:"+currentProgramContent);
      blocklyDatas.setKeyData('currentProgramXml', currentProgramContent);
   },

   _startBackGround :function () {
	  ReactDOM.render(<Background  />,document.getElementById('popupWindow'));
   },

   _addSensorConditionListener : function() {
	   var conditionSensorBlock = ubtBlocklyUtils.findBlocksByType('program_goto_phone_condition');
	   var touchSensorBlock = ubtBlocklyUtils.findBlocksByType('program_goto_touch_condition');
	   conditionSensorBlock = _.union(conditionSensorBlock,touchSensorBlock);
	   var conditionArray = [];
	   var len = conditionSensorBlock.length;
	   for (var i = 0 ; i < len; i++ ) {
		   var block = conditionSensorBlock[i];
		   if (block.disabled == true) {
			   continue;
		   }
		   var sensor = block.getFieldValue('SENSOR');
           var operator = block.getFieldValue('OP');
           var value = block.getFieldValue('VALUE');
           var sensorId = block.getFieldValue('SENSOR_ID');
           var branchId = block.getFieldValue('PROGRAM_BRANCH');
           var sensorCondition = new SensorCondition(sensor, operator , value, sensorId,branchId);
		   conditionArray.push(sensorCondition);
	   }
	   if (len ==0) {
		   return;
	   } 
	   if (window.blocklyObj && window.blocklyObj.registerSensorObservers) {
		   var conditionParam = JSON.stringify(conditionArray);	 
		   console.log('添加监听事件'); 
		   console.log(conditionParam);  
		   window.blocklyObj.registerSensorObservers(conditionParam);
	   } else {
		   console.log(JSON.stringify(conditionArray));
	   }
   },

   _stopProgramExecution : function() {
	   console.log('异常停止程序的执行');
	   programRunner.stopProgram(true);
	   ubtBlocklyUtils.setAllBlocksEditable(true);
	   ubtBlocklyUtils.setAllBlocksMovable(true);
	   eventsListener.trigger('closeBackGround');	   
   },

    _changeRunningState : function(param) {
		this.setState({isRunning: param});
		//如果存在重新开始的块，不要调用停止机器人的命令
		if (!param && !blocklyDatas.getDataByKey('wwGotoStart')) {
			console.log('调用停止机器人的命令');
			var stopRobatCommand = new RobatCommand('stopRobot');
            stopRobatCommand.send();
		}		
	},

	handleClick : function(){
		Blockly.DropDownDiv.hide();
		if($("#prog_ctrl_div").attr("disabled")=="disabled"){//有disabled属性不可以点击直接return
			return;
		} else {
			var blueState = blocklyDatas.getDataByKey('blueState');
			if (blueState == 0) {
				var dom = angular.element($("#bodyContent")).scope();
				dom.indexBus('blueConnect');
				/**
				var content = MSG['id_blue_disconnect'];
				var id_OK = MSG['id_ok'];
				var obj =  {"title":"Tips","content":content,"btnText":id_OK};
				dom.showAlert(obj);
				 */
			} else {
				this.setState({isRunning:!this.state.isRunning});
				//ReactDOM.render(<BlockInputContainer/>,document.getElementById('blueImg'));
				if(!this.state.isRunning) {
					//blocklyDatas.setKeyData('forward_another',undefined);
					ReactDOM.render(<Background  />,document.getElementById('popupWindow'));
					//增加传感器条件的监听
					this._addSensorConditionListener();
					var startBlock = ubtBlocklyUtils.findBlocksByType('program_start');
					var goBackBlock = ubtBlocklyUtils.findBlockByType('program_goto_start');
					if (goBackBlock && goBackBlock.parentBlock_) {
						InteractiveMethod.setContainGoBack(true);
					}
					ubtBlocklyUtils.setAllBlocksEditable(false);
					ubtBlocklyUtils.setAllBlocksMovable(false);
					var code = ubtBlocklyUtils.blockToCodeInWorkspace(startBlock[0]);
					//如果程序中存在重新开始的块，设置块存在的标志
					if (code.indexOf('wwGotoStart') > -1) {
						blocklyDatas.setKeyData('wwGotoStart',true);
					}
					programRunner.programRunnerIndex = 1;  
				    programManager.setProgramRunnerIndex(1); 
					programRunner.startProgram(code);
				} else {
					//有重新开始的块，停止后将标志清空
					blocklyDatas.setKeyData('wwGotoStart',false);
					//点击停止的时候清除掉注册的传感器条件监听
					if (window.blocklyObj && window.blocklyObj.unRegisterAllSensorObserver) {	   
						window.blocklyObj.unRegisterAllSensorObserver();
					} else {
					}
					blocklyDatas.setKeyData("programRunning", false);
					ubtBlocklyUtils.setAllBlocksEditable(true);
					ubtBlocklyUtils.setAllBlocksMovable(true);
					eventsListener.trigger('closeBackGround');			
					programRunner.stopProgram(true);		
					InteractiveMethod.setContainGoBack(false);
					//var stopRobatCommand = new RobatCommand('stopRobot');
					//stopRobatCommand.send();
				}	
			}
		}

		$("#prog_ctrl_div").attr("disabled",true);
		setTimeout(function() {
			console.log("123");
			$("#prog_ctrl_div").attr("disabled",false);
		}, 1000);
		//var code = ubtBlocklyUtils.blockToCodeInWorkspace(startBlock[1]);
		//(new ProgramRunner(1)).startProgram(code);
	},
    render(){
		console.log('this.state.isRunning:'+this.state.isRunning);
		//var src = this.state.isRunning ? 'images/start.png' : 'images/stop.png';
		var classInfo = this.state.isRunning ? 'icon ion-stop' : 'icon ion-play';
		console.log(classInfo);
		var runInfo = this.state.isRunning ?  MSG['id_stop_info'] : MSG['id_start_info'] ;
        return (<div className="execute-btn" onClick={this.handleClick}>
		            <i className={classInfo}></i>
					<span>{runInfo}</span>
		       </div>);
	}
});

module.exports = ProgCtrlButton;
