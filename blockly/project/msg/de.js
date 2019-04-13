var MSG = {
    title: "Code",
    blocks: "Bausteine",
    linkTooltip: "Speichern und auf Bausteine verlinken.",
    runTooltip: "Das Programm ausführen, das von den Bausteinen im Arbeitsbereich definiert ist.",
    badCode: "Programmfehler:\n%1",
    timeout: "Die maximalen Ausführungswiederholungen wurden überschritten.",
    trashTooltip: "Alle Bausteine verwerfen.",
    catLogic: "Logik",
    catLoops: "Schleifen",
    catMath: "Mathematik",
    catText: "Text",
    movements:"movements",
    catLists: "Listen",
    catColour: "Farbe",
    catVariables: "Variablen",
    catFunctions: "Funktionen",
    listVariable: "Liste",
    textVariable: "Text",
    httpRequestError: "Mit der Anfrage gab es ein Problem.",
    linkAlert: "Teile deine Bausteine mit diesem Link:\n\n%1",
    hashError: "„%1“ stimmt leider mit keinem gespeicherten Programm überein.",
    xmlError: "Deine gespeicherte Datei konnte nicht geladen werden. Vielleicht wurde sie mit einer anderen Version von Blockly erstellt.",
    badXml: "Fehler beim Parsen von XML:\n%1\n\nWähle 'OK' zum Verwerfen deiner Änderungen oder 'Abbrechen' zum weiteren Bearbeiten des XML.",

    /**Toolbox begin*/
    /** toolbox的开始 */
    id_start: "Start",
    /** toolbox的动作 */
    id_actions: "Bewegungen",
    /** toolbox的运动 */
    id_moves : "Bewegungen",
    /** toolbox的感知 */
    id_sensors : "Sensoren",
    /** toolbox的事件 */
    id_events : "Ereignisse",
    /** toolbox的数学 */
    id_math : "Math",
    /** toolbox的控制 */
    id_control : "Steuerung",
    /** toolbox的展示 */
    id_show : "Vorführung",
    /**Toolbox end*/

    /**Start Category begin */
    id_when_start : "Zum Starten auf „Ausführen“ klicken",
    id_go_to_start : "Zum Anfang",
    /**Start Category end */

    /** Movement Category begin */

    servo_angle_popup_title :"Drehwinkel des Servomotors festlegen",
    servo_angle_popup_close:"Schließen",
    servo_angle_popup_variable:"Variable",
    servo_angle_popup_angle:"Winkel",
    servo_angle_popup_cancel :"Abbrechen",
    servo_angle_popup_ok :"OK",

    rotate_servo_popup_clockwise:"Im Uhrzeigersinn",
    rotate_servo_popup_anti_clockwise:"Gegen den Uhrzeigersinn",
    rotate_servo_popup_stop:"Anhalten",
    rotate_servo_popup_title:"Drehmodus",
    rotate_servo_popup_cancel:"Abbrechen",
    rotate_servo_popup_ok:"OK",

    servo_status_popup_title:"Status des Servomotors festlegen",
    servo_status_popup_cancel:"Abbrechen",
    servo_status_popup_ok:"OK",
    servo_status_popup_locking:"Sperren",
    servo_status_popup_adjustable:"Entsperren",
    servo_status_popup_tips:"Sie können den für den Roboter entsprechenden Servo nicht einstellen, wenn er sich im gesperrten Modus befindet.",

    posture_named_popup_title :"Name der Haltung",
    posture_named_popup_cancel :"Abbrechen",
    posture_named_popup_ok :"OK",
    posture_named_popup_placeholder :"Haltung",
    posture_named_popup_msg :"Der Name der Haltung enthält unzulässige Zeichen.",
    posture_named_too_long : "Der Name der Haltung darf maximal %1 Zeichen enthalten.",
  /*运动  begin*/
    gyro_rotate_direction_popup_title :"Drehrichtung des Servomotors auswählen",
    gyro_rotate_direction_popup_cancel :"Abbrechen",
    gyro_rotate_direction_popup_ok :"OK",
    gyro_rotate_direction_popup_curVal :"Aktueller Wert",
    gyro_rotate_direction_popup_course :"Peilwinkel",
    gyro_rotate_direction_popup_horizontal :"Rollwinkel",
    gyro_rotate_direction_popup_house :"Neigungswinkel",
  /*运动  end*/
    posture_set_desc : "Open the right switch and then move the robot to set the position",
    posture_ok_desc : "Pose after input position name",
    id_servo : 'Servo',
    id_rotate : 'Drehen',
    id_degree : 'Grad',
    id_in : 'während',
    id_millsecond : 'ms',

    id_rotate_circle : 'Servo um 360° drehen',
    id_servos : 'Servos',
    id_run_to : 'Laufen zu',
    id_all: 'Alle',
    id_lock : 'Sperren',
    id_unlock : 'Entsperren',
    servo_id : 'ID',
    servo_angle : 'Winkel',
    movement_gesture: 'Haltung',
    servo_direction : 'Richtung',
    servo_speed : 'Geschwindigkeit',
    /** Movement Category end */

    /**Control Category begin */
    id_control_wait_for : 'Warten auf',
    id_control_repeat : 'Wiederholen',
    id_control_repeat_times: 'Mal',
    id_control_wait:'Warten',
    id_control_seconds:'Sekunden',
    id_math_not:'Nicht',
    id_while : 'während',
    id_until : 'bis',
    id_repeat : 'Durchführen',
    /**Control Category end */

   /*Event Category begin*/
    maincontrol_box :"Hauptsteuerkasten",
    low_power :"Niedriger Ladestand",
    ir_sensor : "IR-Sensor",
    reflectance : "Reflexionsgrad",
    touch_sensor:"Touch-Sensor",
    status : "Der Status lautet",
    title_touch_sensor : "Touch-Sensor-Einstellung",
    click : "Klicken",
    db_click : "Doppelklicken",
    press_hold : "Gedrückt halten",
    release : "Loslassen",
    gyroscope : "Gyroskop",
    angle : "Winkel",
    axie : 'Achse',
    title_device_tilt : "Telefon-/Tablet-Status-Einstellung",
    phone_pad :"Telefon/Tablet",
    tilt_left : "Nach links kippen",
    tilt_right : "Nach rechts kippen",
    tilt_up : "Nach oben kippen",
    tilt_down : "Nach unten kippen",
    tilt_swing : "Kippen und schwenken",
    /*Event Category end*/

    /** Show Category start */
    id_show_play_effect:'Effekt wiedergeben',
    id_show_play_tune:'Stimmung wiedergeben',
    id_show_show_emoji:'Emoji anzeigen',
    id_show_show_LEDs:'LEDs anzeigen',
    id_show_time_during:'für',
    id_show_time_ms:'ms',
    id_show_times:'Mal',
    sound_effects_popup_title :"Soundeffekte festlegen",
    sound_effects_popup_cancel :"Abbrechen",
    sound_effects_popup_ok :"OK",
    sound_effects_recording_add :"Neue Aufnahme hinzufügen",
    sound_effects_recording_delete :"Löschen",
    title_setting_light : "Licht wird eingestellt",
    title_setting_tune : "Stimmung wird eingestellt",
    title_setting_emotion : "Emotion wird eingestellt",
    id_all_bright: "Alle hell",
    id_custom: "Benutzerdefiniert",
    id_smile: 'Lächeln',
    id_cry : 'Weinen',
    id_sad : 'Traurig',
    id_wink : 'Zwinkern',
    id_dizzy : 'Schwindelig',
    id_daze : 'Benommen sein',
    id_open_eyes : 'Augen öffnen',
    id_close_eyes : 'Augen schließen',
    /** Show Category end */

    /**Sensor Category begin */
    id_sensor_IR_sensor: 'IR-Sensor',
    id_sensor_reflectance_between_obstacle:'reflectance_between_obstacle',
    id_sensor_touch_sensor:'Touch-Sensor',
    id_sensor_touch_sensor_status:'Status',
    id_sensor_gyroscope:'Gyroskop',
    id_sensor_angle:'Winkel',
    y_axie:'Rollwinkel',
    x_axie:'Neigungswinkel',
    z_axie:'Peilwinkel',
    servo:'Servo',
    id_sensor_set_gyroscope:'Gyroskop festlegen',
    id_sensor_angle_to_zero:'Winkel auf 0',
    /**Sensor Category end */

    /**Math Category begin */
    id_math_variables_set_add : "%1 + %2",
    id_set : "Festlegen",
    id_to : "bis",
    /**Math Category end */

    /* Common section begin */
    btn_name_confirm : "OK",
    btn_name_cancel: "Abbrechen",
    /* Common section end*/

    id_start_info : 'Ausführen',
    id_stop_info : 'Anhalten',

    title_infrared_sensor : "Infrarotsensor-Einstellung",
    current_value : 'Aktueller Wert',
    distance_1: 'Zu nah',
    distance_2:'Nah',
    distance_3:'Mittel',
    distance_4:'Weit',
    distance_5:'Zu weit',

   /* need to be removed, wait to confirm */
    distance_very_near: 'Zu nah',
    distance_near:'Nah',
    distance_middle:'Mittel',
    distance_far:'Weit',
    distance_very_far:'Zu weit',

    title_bluetooth_connect : "Bluetooth-Verbindung",
    title_time_adjust : "Zeiteinstellung",

    index_back:"Zurück",
    disconnected : "Getrennt",

  /*项目  begin*/
    //保存项目
    input_rule_msg : "Special characters can not be entered, enter up to %1 characters or %2 chinese characters",
    variable_inputrule_msg : "Can not start with the number, special characters can not be entered, up to %1 characters or %2 chinese characters",
    add_project_placeholder : "Neues Projekt",
    project_pop_ok_btn: "OK",
    project_pop_cancel_btn: "Abbrechen",
    add_project_pop_title : "Projektname",
    add_project_input_check : "Sie dürfen maximal 16 Zeichen eingeben.",
    project_name_too_long : "Der Projektname darf maximal %1 Zeichen enthalten.",
    project_name_popup_msg : "Der Projektname enthält ungültige Zeichen.",
    //是否保存项目
    is_add_project_pop_title :"Projekt speichern",
    is_add_project_pop_tips :"Aktuelles Projekt speichern?",
    //项目列表
    project_list_title :"Meine Projekte",
    porject_alert_title:"Fehler",
    porject_alert_tips:"Tipps",
    porject_alert_content:"Dies ist leider der falsche Parameter für das Vorgangsziel. Bitte überprüfen.",
    porject_alert_content_01:"Der Elementname ist bereits vorhanden. Erneut eingeben.",
    porject_alert_content_02:"Fehler im Basisservicevorgang. Die Fehlermeldung lautet:",
    porject_alert_content_03:"Fehler in den empfangenen Daten der Datenbank.",
    porject_alert_content_04:"Projekt konnte nicht gelesen werden ",
    porject_alert_content_05:"Der Programmblock in der Projektdatei enthält leider Fehler.",
    porject_alert_content_06:"Projekt gespeichert",
    porject_alert_btnText:"OK",
    /*项目  end*/

  /*设置音效弹出框音效文件国际化  begin*/
    add_recording_ok:"OK",
    recording_tips:"Aufnahme",
    id_control_break : 'Nicht im Umlauf ',
    id_blue_disconnect : 'Bluetooth-Verbindung getrennt',
    id_ok : 'OK',
    recording_title:"Aufnahme",
    recording_cancel:"Abbrechen",
    recording_ok:"OK",
    recording_placeholder:"Geben Sie einen Namen für die Aufnahme ein.",
    recording_popup_title:"Eingabe des Namens der Aufnahmedatei",
    recording_name_popup_msg : "Recording name contains invalid characters",
    animal:"Tier",
    machine:"Maschine",
    recording:"Aufnahme",
    bear:"Bär",
    bird:"Vogel",
    chicken:"Huhn",
    cow:"Kuh",
    dog:"Hund",
    elephant:"Elefant",
    giraffe:"Giraffe",
    horse:"Pferd",
    lion:"Löwe",
    monkey:"Affe",
    pig:"Schwein",
    rhinoceros:"Nashorn",
    sealions:"Seelöwe",
    tiger:"Tiger",
    walrus:"Walross",
    ambulance:"Ambulanz",
    busy_tone:"busy_tone",
    carhorn:"Hupe",
    carhorn1:"carhorn1",
    doorbell:"Türklingel",
    engine:"Motor",
    laser:"Laser",
    meebot:"Meebot",
    police_car_1:"police_car_1",
    police_car_2:"police_car_2",
    ringtones:"Klingeltöne",
    robot:"Roboter",
    telephone_call:"telephone_call",
    touch_tone:"touch_tone",
    wave:"Winken",
  /*设置音效弹出框音效文件国际化  end*/

    variable_named_popup_placeholder :"Variable",
    title_variable_set : 'Variable festlegen',
    variable_named_popup_msg :"Der Variablenname enthält unzulässige Zeichen.",
    variable_named_too_long : "Der Variablenname darf maximal %1 Zeichen enthalten.",
    speed:"Geschwindigkeit",
    speed_VS:"Sehr langsam",
    speed_S:"Langsam",
    speed_M:"Mittel",
    speed_V:"Schnell",
    speed_VF:"Sehr schnell",
    speed_no_value:"Radlose Steuerung des aktuellen Geräts",
    speed_only_360_value:"Das aktuelle Gerät weist keine radlose 360-Grad-Steuerung auf.",
    lights_tips:"Das aktuelle Gerät weist keine 360-Grad-Beleuchtung auf.",
    exit_tips:"Das aktuelle Programm wird nicht gespeichert. Möchten Sie den Vorgang zum Beenden fortsetzen？",
    project_has_no_change:"Das aktuelle Programm wurde nicht geändert.",
    close_blue:"Bluetooth-Verbindung hergestellt. Möchten Sie die Verbindung trennen?",
    posture_link:"Das Modell ist nicht verbunden. Verbinden Sie zuerst das Modell.",
    posture_link_popup_title:"Das Modell ist verbunden.",
    posture_link_popup_cancel:"Abbrechen",
    posture_link_popup_ok:"OK",
    recording_name_repeat:"Name der Aufnahme wiederholen",
    recording_named_too_long : "Der Name ist zu lang. Erneut eingeben.",
    recording_alert_title:"Fehler",
    recording_alert_content:"Zugriffsrecht fehlgeschlagen",
    recording_alert_ok:"OK",
    help_title:"Blockeinführung",
    newProjectName:"Neues Projekt",
    sysVoiceName:"Stimme",
    exit_popup_cancel:"Abbrechen",
    exit_popup_ok:"OK",
    exit_popup_title:"Tipps",
    recording_data_tips:"Das aktuelle System enthält keine benutzerdefinierten Aufnahmedateien.",
    infrared_tips:"Infrared sensor is not connected to the current model",
    touch_tips:"The touch sensor is not connected to the current model",
    gyroscope_tips:"The gyro sensor is not connected to the current model",


    id_infinite_loop_error:'Program exit due to out of memory, please return back and retry',
    // 新手指引
    save_project_msg:"Tap here to save your program.",
    projectlist_msg:"See what Jimu have learned and add new program for it.",
    swift_msg:"Tap here to see your code.",
    help_msg:"Need any help? Get support here.",
    run_msg:"Let's run your code on Jimu.",
    go_skip:"skip"






};
