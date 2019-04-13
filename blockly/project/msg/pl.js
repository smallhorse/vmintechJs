var MSG = {
  title: "Kod",
  blocks: "Bloki",
  linkTooltip: "Zapisz i podlinkuj do bloków",
  runTooltip: "Uruchom program zdefinowany przez bloki w obszarze roboczym",
  badCode: "Błąd programu:\n%1",
  timeout: "Maksymalna liczba iteracji wykonywań przekroczona",
  trashTooltip: "Odrzuć wszystkie bloki.",
  catLogic: "Logika",
  catLoops: "Pętle",
  catMath: "Matematyka",
  catText: "Tekst",
  catLists: "Listy",
  catColour: "Kolor",
  catVariables: "Zmienne",
  catFunctions: "Funkcje",
  listVariable: "lista",
  textVariable: "tekst",
  httpRequestError: "Wystąpił problem z żądaniem.",
  linkAlert: "Udpostępnij swoje bloki korzystając z poniższego linku : \n\n\n%1",
  hashError: "Przepraszamy, \"%1\" nie odpowiada żadnemu zapisanemu programowi.",
  xmlError: "Nie można załadować zapisanego pliku. Być może został utworzony za pomocą innej wersji Blockly?",
  badXml: "Błąd parsowania XML : \n%1\n\nZaznacz 'OK' aby odrzucić twoje zmiany lub 'Cancel', żeby w przyszłości edytować XML.",

  /**Toolbox */
  id_start: "Start",
  id_actions: "Ruchy",
  id_moves : "Ruchy",
  id_sensors : "Czujniki",
  id_events : "Wydarzenia",
  id_math : "Obliczenia",
  id_control : "Sterowanie",
  id_show : "Pokaż",

/**Begin Category */
  id_when_start : "Kliknij „Uruchom”, aby rozpocząć",
  id_go_to_start : "Wróć do początku",

/**Sensor Category */
  id_sensor_IR_sensor: 'Czujnik podczerwieni',
  id_sensor_reflectance_between_obstacle:'współczynnik_odbicia_pomiędzy_przeszkodami',
  id_sensor_touch_sensor:'Czujnik dotykowy',
  id_sensor_touch_sensor_status:'stan',
  id_sensor_gyroscope:'Żyroskop',
  id_sensor_angle:'kąt',
  y_axie:'Kąt wznoszenia',
  x_axie:'Kąt pochylenia',
  z_axie:'Kąt kursu',
  servo:'Siłownik',
  id_sensor_set_gyroscope:'Ustaw żyroskop',
  id_sensor_angle_to_zero:'kąt do poz. 0',

  id_math_variables_set_add : "%1 + %2",
  id_set : "ustaw",
  id_to : "na",

  id_control_wait_for : 'czekaj na',
  id_control_repeat : 'powtórz',
  id_control_repeat_times: 'razy',
  id_control_wait:'zaczekaj',
  id_control_seconds:'sekund(y)',
  id_math_not:'nie',

  /* common section begin */
  btn_name_confirm : "ok",
  btn_name_cancel: "anuluj",

  /* common section end*/

  /*event component section begin*/
  maincontrol_box :"Główna skrzynka sterująca",
  low_power :"Niski poziom zasilania",
  ir_sensor : "Czujnik podczerwieni",
  reflectance : "współczynnik odbicia",
  touch_sensor:"Czujnik dotykowy",
  status : "status to",
  title_touch_sensor : "Ustawienia czujnika dotykowego",
  click : "Kliknij",
  db_click : "Podwójne kliknięcie",
  press_hold : "Wciśnij „Zawieś”",
  release : "Uwolnij",
  gyroscope : "Żyroskop",
  angle : "kąt",
  axie : 'osie',
  title_device_tilt : "Ustawienia telefonu/stanu padu",
  phone_pad :"Telefon/Pad",
  tilt_left : "Pochyl w lewo",
  tilt_right : "Pochyl w prawo",
  tilt_up : "Pochyl w górę",
  tilt_down : "Pochyl w dół",
  tilt_swing : "Przechylenia obrotowe",
  /*event component section end*/

  /** control  */
  id_while : 'chwila',
  id_until : 'do',
  id_repeat : 'robić',

  id_start_info : 'Uruchom',
  id_stop_info : 'Stop',

  title_infrared_sensor : "Ustawienia czujnika podczerwieni",
  current_value : 'wartość bieżąca',
  distance_1: 'zbyt blisko',
  distance_2:'blisko',
  distance_3:'średnio',
  distance_4:'daleko',
  distance_5:'za daleko',

  /* need to be removed, wait to confirm */
  distance_very_near: 'zbyt blisko',
  distance_near:'blisko',
  distance_middle:'średnio',
  distance_far:'daleko',
  distance_very_far:'za daleko',

  id_servo : 'siłownik',
  id_rotate : 'obrót',
  id_degree : 'stopnie',
  id_in : 'podczas',
  id_millsecond : 'ms',

  id_rotate_circle : 'Obrót siłownika 360°',
  id_servos : 'Siłowniki',
  id_run_to : 'przebieg do',

  /* display section begin */
  title_setting_light : "Ustawienie światła",
  title_setting_tune : "Ustawienie utworu",
  title_setting_emotion : "Ustawienie emocji",
  id_all_bright: "wszystko jasne",
  id_custom: "niestandardowy",
  id_smile: 'uśmiech',
  id_cry : 'płakać',
  id_sad : 'smutny',
  id_wink : 'oczko',
  id_dizzy : 'oszołomienie',
  id_daze : 'szok',
  id_open_eyes : 'otwórz oczy',
  id_close_eyes : 'zamknij oczy',
  /* display section end */

  id_all: 'Wszystko',
  id_lock : 'zablokuj',
  id_unlock : 'odblokuj',

  title_bluetooth_connect : "Połącz Bluetooth",
  title_time_adjust : "Koryguj czas",

  // Show
  id_show_play_effect:'Odtwórz efekt',
  id_show_play_tune:'Odtwórz utwór',
  id_show_show_emoji:'Pokaż emoji',
  id_show_show_LEDs:'Pokaż diodami LED',
  id_show_time_during:'przez',
  id_show_time_ms:'ms',
  id_show_times:'razy',
    /*展示  begin*/
  sound_effects_popup_title :"Ustaw efekty dźwiękowe",
  sound_effects_popup_cancel :"Anuluj",
  sound_effects_popup_ok :"OK",
  sound_effects_recording_add :"Dodaj nowe nagranie",
  sound_effects_recording_delete :"Usuń",

  servo_id : 'Identyfikator',
  servo_angle : 'Kąt',
  movement_gesture: 'Postawa', 
  servo_direction : 'kierunek',
  servo_speed : 'prędkość',

    /*展示  end*/

    /*运动  begin*/
  servo_angle_popup_title :"Ustaw kąt obrotu zestaw dla silnika siłownika",
  servo_angle_popup_close:"Zamknij",
  servo_angle_popup_variable:"Zmienna",
  servo_angle_popup_angle:"Kąt",
  servo_angle_popup_cancel :"Anuluj",
  servo_angle_popup_ok :"OK",

  rotate_servo_popup_clockwise:"Prawoskrętny",
  rotate_servo_popup_anti_clockwise:"Lewoskrętny",
  rotate_servo_popup_stop:"stop",
  rotate_servo_popup_title:"Tryb obracania",
  rotate_servo_popup_cancel:"Anuluj",
  rotate_servo_popup_ok:"OK",

  servo_status_popup_title:"Ustaw stan silnika siłownika",
  servo_status_popup_cancel:"Anuluj",
  servo_status_popup_ok:"OK",
  servo_status_popup_locking:"Zablokuj",
  servo_status_popup_adjustable:"Odblokuj",
  servo_status_popup_tips:"Nie można wyregulować odpowiadającego siłownika w przypadku robota w trybie zablokowanym",

    posture_named_popup_title :"Nazwij postawę",
    posture_named_popup_cancel :"Anuluj",
    posture_named_popup_ok :"OK",
    posture_named_popup_placeholder :"Postawa",
    posture_named_popup_msg :"Nazwa postawy zawiera niedozwolone znaki",
    posture_named_too_long : "Nazwa postawy nie może przekraczać %1 znaków",

    gyro_rotate_direction_popup_title :"Wybierz kąt obrotu dla silnika siłownika",
    gyro_rotate_direction_popup_cancel :"Anuluj",
    gyro_rotate_direction_popup_ok :"OK",
    gyro_rotate_direction_popup_curVal :"Wartość bieżąca",
    gyro_rotate_direction_popup_course :"Kąt kursu",
    gyro_rotate_direction_popup_horizontal :"Kąt wznoszenia",
    gyro_rotate_direction_popup_house :"Kąt pochylenia",


    /*运动  end*/
    index_back:"Wstecz",
    disconnected : "Niepodłączone",

    /*项目  begin*/
    //保存项目
    add_project_placeholder : "Nowy projekt",
    project_pop_ok_btn: "OK",
    project_pop_cancel_btn: "Anuluj",
    add_project_pop_title : "Nazwa projektu",
    add_project_input_check : "Można wprowadzić tylko 16 znaków",
    project_name_too_long : "Nazwa projektu nie może przekraczać %1 znaków",
    project_name_popup_msg : "Nazwa projektu zawiera nieprawidłowe znaki",
    //是否保存项目
    is_add_project_pop_title :"Zapisz projekt",
    is_add_project_pop_tips :"Czy zapisać bieżący projekt?",
    //项目列表
    project_list_title :"Moje projekty",
    porject_alert_title:"Błąd",
    porject_alert_tips:"Porady",
    porject_alert_content:"Przepraszamy, zły parametr miejsca docelowego. Proszę to sprawdzić!",
    porject_alert_content_01:"Nazwa elementu już istnieje. Wprowadź ponownie.",
    porject_alert_content_02:"Błąd operacji usługi podstawowej. Wiadomość o błędzie to:",
    porject_alert_content_03:"Błąd danych otrzymany od podstawy!",
    porject_alert_content_04:"Nie udało się odczytać projektu ",
    porject_alert_content_05:"Przepraszamy blok programowy w pliku projektu zawiera błędy!",
    porject_alert_content_06:"Projekt zapisany",
    porject_alert_btnText:"OK",
    /*项目  end*/
    add_recording_ok:"OK",
    recording_tips:"Nagrywanie",
    id_control_break : 'Poza obiegiem',
    id_blue_disconnect : 'Bluetooth nie jest podłączony',
    id_ok : 'OK',
    recording_title:"Nagrywanie",
    recording_cancel:"Anuluj",
    recording_ok:"OK",
    recording_placeholder:"Wprowadź nazwę nagrania",
    recording_popup_title:"Wprowadzanie nazwy nagranego pliku",
    /*项目  end*/
    /*设置音效弹出框音效文件国际化  begin*/
    animal:"zwierzę",
    machine:"urządzenie",
    recording:"nagrywanie",
    bear:"niedźwiedź",
    bird:"ptak",
    chicken:"kurczak",
    cow:"krowa",
    dog:"pies",
    elephant:"słoń",
    giraffe:"żyrafa",
    horse:"koń",
    lion:"lew",
    monkey:"małpa",
    pig:"świnia",
    rhinoceros:"nosorożec",
    sealions:"uchatka",
    tiger:"tygrys",
    walrus:"mors",
    ambulance:"ambulans",
    busy_tone:"dźwięk_zajętości",
    carhorn:"klakson",
    carhorn1:"klakson1",
    doorbell:"dzwonek do drzwi",
    engine:"silnik",
    laser:"laser",
    meebot:"meebot",
    police_car_1:"policja_1",
    police_car_2:"policja_2",
    ringtones:"dzwonki",
    robot:"robot",
    telephone_call:"rozmowa telefoniczna",
    touch_tone:"telefon_dotykowy",
    wave:"fala",
    /*设置音效弹出框音效文件国际化  end*/

    variable_named_popup_placeholder :"Zmienna",
    title_variable_set : 'Ustaw zmienną',
    variable_named_popup_msg :"nazwa zmiennej zawiera niedozwolone znaki",
    variable_named_too_long : "nazwa zmiennej nie może przekraczać %1 znaków",
    speed:"prędkość",
    speed_VS:"bardzo wolno",
    speed_S:"wolno",
    speed_M:"średnio",
    speed_V:"szybko",
    speed_VF:"bardzo szybko",
    speed_no_value:"Bezkołowy układ kierowniczy bieżącego sprzętu",
    speed_only_360_value:"Bieżący sprzęt nie posiada bezkołowego układu kierowniczego 360",
    lights_tips:"Bieżący sprzęt nie posiada świateł 360",
    exit_tips:"Bieżący program nie zostanie zapisany, czy na pewno zakończyć?",
    project_has_no_change:"Bieżący program nie uległ zmianie",
    close_blue:"Bluetooth jest podłączony, czy na pewno odłączyć?",
    posture_link:"Model nie jest podłączony. Proszę najpierw połączyć model",
    posture_link_popup_title:"Model podłączony",
    posture_link_popup_cancel:"anuluj",
    posture_link_popup_ok:"ok",
    recording_name_repeat:"Powtórz zarejestrowaną nazwę",
    recording_named_too_long : "Nazwa jest zbyt długa, wprowadź ponownie",
    recording_alert_title:"Błąd",
    recording_alert_content:"przyznanie uprawnień nie powiodło się",
    recording_alert_ok:"OK",
    help_title:"Wprowadzenie klocka",
    newProjectName:"Nowy projekt",
    sysVoiceName:"głos",
    exit_popup_cancel:"Anuluj",
    exit_popup_ok:"OK",
    exit_popup_title:"Porady",
    recording_data_tips:"Bieżący system nie zawiera niestandardowych plików nagrań",
  //以下内容需要新增翻译
  movements:"movements",
  posture_set_desc : "Open the right switch and then move the robot to set the position",
  posture_ok_desc : "Pose after input position name",
  /*项目  begin*/
  //保存项目
  input_rule_msg : "Special characters can not be entered, enter up to %1 characters or %2 chinese characters",
  variable_inputrule_msg : "Can not start with the number, special characters can not be entered, up to %1 characters or %2 chinese characters",
  recording_name_popup_msg : "Recording name contains invalid characters",
  /*设置音效弹出框音效文件国际化  end*/
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
