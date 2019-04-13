var MSG = {
  title: "程式碼",
  blocks: "積木",
  linkTooltip: "儲存積木組並提供連結。",
  runTooltip: "於工作區中執行積木組所定義的程式。",
  badCode: "程式錯誤：\n%1",
  timeout: "超過最大執行數。",
  trashTooltip: "捨棄所有積木。",
  catLogic: "邏輯",
  catLoops: "迴圈",
  catMath: "數學式",
  catText: "文字",
  catLists: "列表",
  catColour: "顏色",
  catVariables: "變量",
  catFunctions: "流程",
  listVariable: "列表",
  textVariable: "文字",
  httpRequestError: "命令出現錯誤。",
  linkAlert: "透過此連結分享您的積木組：\n\n%1",
  hashError: "對不起，「%1」並未對應任何已保存的程式。",
  xmlError: "未能載入您保存的檔案。或許它是由其他版本的Blockly創建？",
  badXml: "解析 XML 時出現錯誤：\n%1\n\n選擇'確定'以放棄您的更改，或選擇'取消'以進一步編輯 XML。",

  /**Toolbox begin*/
  /** toolbox的开始 */
  id_start: "開始",
  /** toolbox的动作 */
  id_actions: "運動",
  /** toolbox的运动 */
  id_moves : "運動",
  /** toolbox的感知 */
  id_sensors : "感知",
  /** toolbox的事件 */
  id_events : "事件",
  /** toolbox的数学 */
  id_math : "數學",
  /** toolbox的控制 */
  id_control : "控制",
  /** toolbox的展示 */
  id_show : "展示",
  /**Toolbox end*/

  /**Start Category begin */
  id_when_start : "點選「運行」開始",
  id_go_to_start : "重新開始",
  /**Start Category end */

  /** Movement Category begin */
  servo_angle_popup_title :"設定舵機旋轉角度",
  servo_angle_popup_close:"關閉",
  servo_angle_popup_variable:"變數",
  servo_angle_popup_angle:"角度",
  servo_angle_popup_cancel :"取消",
  servo_angle_popup_ok :"確定",

  rotate_servo_popup_clockwise:"順時針",
  rotate_servo_popup_anti_clockwise:"逆時針",
  rotate_servo_popup_stop:"停止",
  rotate_servo_popup_title:"目前設定舵機旋轉 360度",
  rotate_servo_popup_cancel:"取消",
  rotate_servo_popup_ok:"確定",

  servo_status_popup_title:"設定舵機狀態",
  servo_status_popup_cancel:"取消",
  servo_status_popup_ok:"確定",
  servo_status_popup_locking:"鎖定",
  servo_status_popup_adjustable:"可調整",
  servo_status_popup_tips:"鎖定狀態時，不可調整機器人對應的舵機",

  posture_named_popup_title :"為該姿勢命名",
  posture_named_popup_cancel :"取消",
  posture_named_popup_ok :"確定",
  posture_named_popup_placeholder :"姿勢",
  posture_named_popup_msg :"姿勢名稱包含無效字元",
  posture_named_too_long : "姿勢名稱長度不能超過 %1 個中文字，或者 %2 個英文字元",

  gyro_rotate_direction_popup_title :"選擇陀螺儀旋轉方向",
  gyro_rotate_direction_popup_cancel :"取消",
  gyro_rotate_direction_popup_ok :"確定",
  gyro_rotate_direction_popup_curVal :"目前值",
  gyro_rotate_direction_popup_course :"航向角",
  gyro_rotate_direction_popup_horizontal :"橫滾角",
  gyro_rotate_direction_popup_house :"俯仰角",

  id_servo : '設定舵機',
  id_rotate : '旋轉',
  id_degree : '度',
  id_in : '時間',
  id_millsecond : '毫秒',

  id_rotate_circle : '旋轉舵機 360 度',
  id_servos : '旋轉舵機',
  id_run_to : '運動到',

  id_all: '全部',
  id_lock : '鎖定',
  id_unlock : '可調整',

  servo_id : 'ID',
  servo_angle : '角度', 
  movement_gesture: '姿勢',
  servo_direction : '方向',
  servo_speed : '速度', 
  /** Movement Category end */

  /**Control Category begin */
  id_control_wait_for : '等待',
  id_control_repeat : '重複',
  id_control_repeat_times: '次',
  id_control_wait:'等待',
  id_control_seconds:'秒',
  id_math_not:'非',
  id_while : '當滿足',
  id_until : '直到',
  id_repeat : '重複',
  /**Control Category end */

  /*Event Category begin*/
  maincontrol_box :"控制器",
  low_power :"模型電量低",
  ir_sensor : "紅外線傳感器",
  reflectance : "距離",
  touch_sensor:"觸碰傳感器",
  status : "狀態為",
  title_touch_sensor : "設定觸碰傳感器",
  click : "按一下",
  db_click : "按兩下",
  press_hold : "長按",
  release : "鬆開",
  gyroscope : "陀螺儀",
  axie : '軸',
  title_device_tilt : "選擇手機/平板狀態",
  phone_pad :"手機/平板",
  tilt_left : "向左傾斜",
  tilt_right : "向右傾斜",
  tilt_up : "向上傾斜",
  tilt_down : "向下傾斜",
  tilt_swing : "左右搖晃",
  /*Event Category end*/

  /** Show Category start */
  id_show_play_effect:'播放音效',
  id_show_play_tune:'播放音調',
  id_show_show_emoji:'顯示表情',
  id_show_show_LEDs:'顯示燈光',
  id_show_time_during:'時間',
  id_show_time_ms:'毫秒',
  id_show_times:'次',  
  sound_effects_popup_title :"設定音效",
  sound_effects_popup_cancel :"取消",
  sound_effects_popup_ok :"確定",
  sound_effects_recording_add :"新增錄音",
  sound_effects_recording_delete :"刪除",
  title_setting_light : "設定燈光",
  title_setting_tune : "設定音效",
  title_setting_emotion : "設定表情",
  id_all_bright: "全亮",
  id_custom: "自行定義",
  id_smile: '微笑',
  id_cry : '哭泣',
  id_sad : '傷心',
  id_wink : '眨眼',
  id_dizzy : '暈',
  id_daze : '發呆',
  id_open_eyes : '睜眼',
  close_eyes : '閉眼', 
  /** Show Category end */

  /**Sensor Category begin */
  id_sensor_IR_sensor: '紅外線傳感器',
  id_sensor_reflectance_between_obstacle:'與障礙物距離',
  id_sensor_touch_sensor:'觸碰傳感器',
  id_sensor_touch_sensor_status:'狀態',
  id_sensor_gyroscope:'陀螺儀',
  id_sensor_angle:'角度',
  x_axie:'俯仰角',
  y_axie:'橫滾角',
  z_axie:'航向角',
  servo:'伺服馬達',
  id_sensor_set_gyroscope:'設定陀螺儀',
  id_sensor_angle_to_zero:'角度為 0',
  /**Sensor Category end */

  /**Math Category begin */
  id_math_variables_set_add : "%1 + %2",
  id_set : "設定",
  id_to : "為",
  /**Math Category end */

  /* Common section begin */
  btn_name_confirm : "確定",
  btn_name_cancel: "取消",
  /* Common section end*/

  id_start_info : '運行',
  id_stop_info : '停止',

  title_infrared_sensor : "設定紅外線傳感器",
  current_value: '目前值',

  title_bluetooth_connect : "藍牙連接",
  title_time_adjust : "設定時間",

  index_back:"返回",
  disconnected : "未連接",  

/*项目  begin*/
  //保存项目
  add_project_placeholder : "新專案",
  project_pop_ok_btn: "確定",
  project_pop_cancel_btn: "取消",
  add_project_pop_title : "專案命名",
  add_project_input_check : "只能輸入 16 個字元",
  project_name_too_long : "專案名稱長度不能超過 %1 個中文字，或者 %2 個英文字元",
  project_name_popup_msg : "專案名稱包含無效字元",
  //是否保存项目
  is_add_project_pop_title :"儲存專案",
  is_add_project_pop_tips :"是否儲存目前專案",
  //项目列表
  project_list_title :"我的專案",

  //保存项目
  porject_alert_title:"錯誤",
  porject_alert_tips:"提示",
  porject_alert_content:"對不起，操作物件參數不正確，請檢查！",
  porject_alert_content_01:"對不起，您輸入的專案名稱已經被使用！",
  porject_alert_content_02:"底層業務操作有誤，錯誤訊息為：",
  porject_alert_content_03:"底層返回資料有誤！",
  porject_alert_content_04:"專案檔案讀取有誤",
  porject_alert_content_05:"對不起，讀取的專案檔案中含有錯誤的程式區塊內容！",
  porject_alert_content_06:"專案儲存成功",
  porject_alert_btnText:"確定",
 
  add_recording_ok:"完成",
  recording_tips:"錄音中",

  id_control_break : '跳出迴圈',
  
  id_blue_disconnect : '未連接藍牙',
  id_ok : '確定',

  recording_title:"錄音中",
  recording_cancel:"取消",
  recording_ok:"完成",
  recording_placeholder:"請輸入錄音名稱",
  recording_popup_title:"錄音檔案名稱輸入",
 /*项目  end*/
    /*设置音效弹出框音效文件国际化  begin*/
    animal:"動物",
    machine:"機器",
    recording:"錄音",
    bear:"熊",
    bird:"鳥",
    chicken:"雞",
    cow:"牛",
    dog:"狗",
    elephant:"大象",
    giraffe:"長頸鹿",
    horse:"馬",
    lion:"獅子",
    monkey:"猴子",
    pig:"豬",
    rhinoceros:"犀牛",
    sealions:"海獅",
    tiger:"老虎",
    walrus:"海象",
    ambulance:"救護車",
    busy_tone:"忙音",
    carhorn:"汽車喇叭",
    carhorn1:"汽車喇叭 1",
    doorbell:"門鈴",
    engine:"引擎",
    laser:"雷射",
    meebot:"小黃人",
    police_car_1:"警車 1",
    police_car_2:"警車 2",
    ringtones:"來電鈴聲",
    robot:"機器人",
    telephone_call:"撥打電話",
    touch_tone:"按鍵音",
    wave:"電波",
    /*设置音效弹出框音效文件国际化  end*/

 variable_named_popup_placeholder :"變數",
 title_variable_set : '設定變數',
 variable_named_popup_msg :"不能以數字開頭，可以字母、底線等開頭；新建變數名稱也不能以數字開頭，輸入名稱不有空格",
 variable_named_too_long : "變數名稱長度不能超過 %1 個中文字，或者 %2 個英文字元",
    speed:"速度",
    speed_VS:"非常慢",
    speed_S:"慢速",
    speed_M:"中速",
    speed_V:"快速",
    speed_VF:"非常快",
    speed_no_value:"模型中沒有可以 360° 旋轉的舵機",
    speed_only_360_value:"模型中沒有普通角度舵機",
    exit_tips:"目前程式尚未儲存，是否繼續退出？",
    lights_tips:"目前模型尚未連接燈光",
    project_has_no_change:"目前程式尚未變更",
    close_blue:"藍牙處於連接狀態，是否關閉?",
    posture_link:"模型尚未連接，請先連接模型",
    posture_link_popup_title:"模型連接",
    posture_link_popup_cancel:"取消",
    posture_link_popup_ok:"確定",
    recording_name_repeat:"錄音名稱重複",
    recording_named_too_long : "名稱過長，請重新輸入",
    recording_alert_title:"錯誤提示",
    recording_alert_content:"錄音授權失敗",
    recording_alert_ok:"確定",
    help_title:"程序區塊介紹",
    newProjectName:"新專案",
    sysVoiceName:"新錄音",
    exit_popup_cancel:"取消",
    exit_popup_ok:"確定",
    exit_popup_title:"提示",
    recording_data_tips:"目前系統沒有自訂錄音檔"
};
