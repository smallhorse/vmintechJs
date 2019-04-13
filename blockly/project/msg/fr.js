var MSG = {
  title: "Code",
  blocks: "Blocs",
  linkTooltip: "Sauvegarder et lier aux blocs.",
  runTooltip: "Lancer le programme défini par les blocs dans l’espace de travail.",
  badCode: "Erreur du programme :\n%1",
  timeout: "Nombre maximum d’itérations d’exécution dépassé.",
  trashTooltip: "Jeter tous les blocs.",
  catLogic: "Logique",
  catLoops: "Boucles",
  catMath: "Math",
  catText: "Texte",
  movements:"movements",
  catLists: "Listes",
  catColour: "Couleur",
  catVariables: "Variables",
  catFunctions: "Fonctions",
  listVariable: "liste",
  textVariable: "texte",
  httpRequestError: "Il y a eu un problème avec la demande.",
  linkAlert: "Partagez vos blocs grâce à ce lien:\n\n%1",
  hashError: "Désolé, '%1' ne correspond à aucun programme sauvegardé.",
  xmlError: "Impossible de charger le fichier de sauvegarde.  Peut être a t-il été créé avec une autre version de Blockly?",
  badXml: "Erreur d’analyse du XML :\n%1\n\nSélectionner 'OK' pour abandonner vos modifications ou 'Annuler' pour continuer à modifier le XML.",

    /**Toolbox begin*/
    /** toolbox的开始 */
    id_start: "Démarrer",
    /** toolbox的动作 */
    id_actions: "Mouvements",
    /** toolbox的运动 */
    id_moves : "Mouvements",
    /** toolbox的感知 */
    id_sensors : "Capteurs",
    /** toolbox的事件 */
    id_events : "Événements",
    /** toolbox的数学 */
    id_math : "Math",
    /** toolbox的控制 */
    id_control : "Contrôler",
    /** toolbox的展示 */
    id_show : "Afficher",
    /**Toolbox end*/

    /**Start Category begin */
    id_when_start : "Cliquez sur « Exécuter » pour démarrer",
    id_go_to_start : "Aller sur Démarrer",
    /**Start Category end */

    /** Movement Category begin */
    servo_angle_popup_title :"Définir l'angle de rotation pour le moteur du servo",
    servo_angle_popup_close:"Fermer",
    servo_angle_popup_variable:"Variable",
    servo_angle_popup_angle:"Angle",
    servo_angle_popup_cancel :"Annuler",
    servo_angle_popup_ok :"OK",

    rotate_servo_popup_clockwise:"Sens horaire",
    rotate_servo_popup_anti_clockwise:"Sens antihoraire",
    rotate_servo_popup_stop:"s'arrêter",
    rotate_servo_popup_title:"Mode de rotation",
    rotate_servo_popup_cancel:"Annuler",
    rotate_servo_popup_ok:"OK",

    servo_status_popup_title:"Définir l'état pour le moteur du servo",
    servo_status_popup_cancel:"Annuler",
    servo_status_popup_ok:"OK",
    servo_status_popup_locking:"Verrouiller",
    servo_status_popup_adjustable:"Déverrouiller",
    servo_status_popup_tips:"Le servo correspondant du robot ne peut être paramétré en mode verrouillé",

    posture_named_popup_title :"Nommer la posture",
    posture_named_popup_cancel :"Annuler",
    posture_named_popup_ok :"OK",
    posture_named_popup_placeholder :"Posture",
    posture_named_popup_msg :"Le nom de la posture contient des caractères invalides",
    posture_named_too_long : "Le nom de la posture est limité à %1 caractères",
  /*运动  begin*/
    gyro_rotate_direction_popup_title :"Sélectionner le sens de rotation du moteur du servo",
    gyro_rotate_direction_popup_cancel :"Annuler",
    gyro_rotate_direction_popup_ok :"OK",
    gyro_rotate_direction_popup_curVal :"Valeur actuelle",
    gyro_rotate_direction_popup_course :"Angle de cap",
    gyro_rotate_direction_popup_horizontal :"Angle de roulis",
    gyro_rotate_direction_popup_house :"Angle d'attaque",
  /*运动  end*/
    posture_set_desc : "Open the right switch and then move the robot to set the position",
    posture_ok_desc : "Pose after input position name",
    id_servo : 'servo',
    id_rotate : 'pivoter',
    id_degree : 'degré',
    id_in : 'lors de',
    id_millsecond : 'ms',

    id_rotate_circle : 'Pivoter le servo à 360 °',
    id_servos : 'Servos',
    id_run_to : 'fonctionner jusqu\'à',
    id_all: 'Tout',
    id_lock : 'verrouiller',
    id_unlock : 'déverrouiller',
    servo_id : 'Numéro d\'identification',
    servo_angle : 'Angle',
    movement_gesture: 'Posture',
    servo_direction : 'direction',
    servo_speed : 'vitesse',
    /** Movement Category end */

    /**Control Category begin */
    id_control_wait_for : 'attendre pour',
    id_control_repeat : 'répéter',
    id_control_repeat_times: 'fois',
    id_control_wait:'attendre',
    id_control_seconds:'secondes',
    id_math_not:'non',
    id_while : 'pendant',
    id_until : 'jusqu\'à',
    id_repeat : 'faire',
    /**Control Category end */

  /*Event Category begin*/
    maincontrol_box :"Boîtier de commande principal",
    low_power :"Basse puissance",
    ir_sensor : "Capteur infrarouge",
    reflectance : "réflectivité",
    touch_sensor:"Capteur tactile",
    status : "l'état est",
    title_touch_sensor : "Paramètres du capteur tactile",
    click : "Cliquer",
    db_click : "Double-cliquer",
    press_hold : "Appuyer et maintenir",
    release : "Relâcher",
    gyroscope : "Gyroscope",
    angle : "angle",
    axie : 'axe',
    title_device_tilt : "Paramètres d'état du téléphone/ tablette",
    phone_pad :"Téléphone/ tablette",
    tilt_left : "Incliner à gauche",
    tilt_right : "Incliner à droite",
    tilt_up : "Incliner vers le haut",
    tilt_down : "Incliner vers le bas",
    tilt_swing : "Incliner en balançant",
    /*Event Category end*/

    /** Show Category start */
    id_show_play_effect:'Lecture d\'effet',
    id_show_play_tune:'Lecture audio',
    id_show_show_emoji:'Afficher les émojis',
    id_show_show_LEDs:'Afficher les voyants',
    id_show_time_during:'pour',
    id_show_time_ms:'ms',
    id_show_times:'fois',
    sound_effects_popup_title :"Définir les effets sonores",
    sound_effects_popup_cancel :"Annuler",
    sound_effects_popup_ok :"OK",
    sound_effects_recording_add :"Ajouter un nouvel enregistrement",
    sound_effects_recording_delete :"Supprimer",
    title_setting_light : "Paramètres de lumière",
    title_setting_tune : "Paramètres audio",
    title_setting_emotion : "Paramètres des émoticônes",
    id_all_bright: "Complètement illuminé",
    id_custom: "personnalisé",
    id_smile: 'sourire',
    id_cry : 'pleurer',
    id_sad : 'triste',
    id_wink : 'clin d\'œil',
    id_dizzy : 'étourdi',
    id_daze : 'stupéfait',
    id_open_eyes : 'ouvrir les yeux',
    id_close_eyes : 'fermer les yeux',
    /** Show Category end */

    /**Sensor Category begin */
    id_sensor_IR_sensor: 'Capteur infrarouge',
    id_sensor_reflectance_between_obstacle:'reflectance_between_obstacle',
    id_sensor_touch_sensor:'Capteur tactile',
    id_sensor_touch_sensor_status:'état',
    id_sensor_gyroscope:'Gyroscope',
    id_sensor_angle:'angle',
    y_axie:'Angle de roulis',
    x_axie:'Angle d\'attaque',
    z_axie:'Angle de cap',
    servo:'Servo',
    id_sensor_set_gyroscope:'Définir le gyroscope',
    id_sensor_angle_to_zero:'angle à 0',
    /**Sensor Category end */

    /**Math Category begin */
    id_math_variables_set_add : "%1 + %2",
    id_set : "définir",
    id_to : "à",
    /**Math Category end */

  /* Common section begin */
    btn_name_confirm : "OK",
    btn_name_cancel: "annuler",
  /* Common section end*/

    id_start_info : 'Courir',
    id_stop_info : 'S\'arrêter',

    title_infrared_sensor : "Paramètres du capteur infrarouge",
    current_value : 'valeur actuelle',
    distance_1: 'trop près',
    distance_2:'à proximité',
    distance_3:'au centre',
    distance_4:'loin',
    distance_5:'trop loin',

  /* need to be removed, wait to confirm */
    distance_very_near: 'trop près',
    distance_near:'à proximité',
    distance_middle:'au centre',
    distance_far:'loin',
    distance_very_far:'trop loin',

    title_bluetooth_connect : "Connexion Bluetooth",
    title_time_adjust : "Ajustement de la durée",

    index_back:"Arrière",
    disconnected : "Déconnecté",

   /*项目  begin*/
    //保存项目
    input_rule_msg : "Special characters can not be entered, enter up to %1 characters or %2 chinese characters",
    variable_inputrule_msg : "Can not start with the number, special characters can not be entered, up to %1 characters or %2 chinese characters",
    add_project_placeholder : "Nouveau projet",
    project_pop_ok_btn: "OK",
    project_pop_cancel_btn: "Annuler",
    add_project_pop_title : "Nom du projet",
    add_project_input_check : "Un maximum de 16 caractères peut être saisi",
    project_name_too_long : "Le nom d'utilisateur est limité %1 caractères",
    project_name_popup_msg : "Le nom de projet contient des caractères invalides",
    //是否保存项目
    is_add_project_pop_title :"Enregistrer le projet",
    is_add_project_pop_tips :"Enregistrer le projet en cours ?",
    //项目列表
    project_list_title :"Mes projets",
    porject_alert_title:"Erreur",
    porject_alert_tips:"Conseils",
    porject_alert_content:"Désolé, les paramètres définis ne peuvent réaliser l'opération souhaitée. Veuillez vérifier !",
    porject_alert_content_01:"Le nom de l'article existe déjà. Veuillez saisir un autre nom.",
    porject_alert_content_02:"Les opérations du service de base contiennent une erreur. Le message d'erreur est :",
    porject_alert_content_03:"les données reçues à partir de la base contiennent une erreur !",
    porject_alert_content_04:"Lecture du projet impossible ",
    porject_alert_content_05:"Désolé, le bloc du programme dans le fichier du projet contient des erreurs !",
    porject_alert_content_06:"Projet enregistré",
    porject_alert_btnText:"OK",
   /*项目  end*/
  /*设置音效弹出框音效文件国际化  begin*/
    add_recording_ok:"OK",
    recording_tips:"Enregistrement",
    id_control_break : 'Hors de portée',
    id_blue_disconnect : 'La connexion Bluetooth n\'est pas établie',
    id_ok : 'OK',
    recording_title:"Enregistrement",
    recording_cancel:"Annuler",
    recording_ok:"OK",
    recording_placeholder:"Veuillez saisir un nom d'enregistrement",
    recording_popup_title:"Saisie du nom de fichier enregistré",
    recording_name_popup_msg : "Recording name contains invalid characters",
    animal:"animal",
    machine:"machine",
    recording:"enregistrement",
    bear:"ours",
    bird:"oiseau",
    chicken:"poulet",
    cow:"vache",
    dog:"chien",
    elephant:"éléphant",
    giraffe:"girafe",
    horse:"cheval",
    lion:"lion",
    monkey:"singe",
    pig:"cochon",
    rhinoceros:"rhinocéros",
    sealions:"otaries",
    tiger:"tigre",
    walrus:"morse",
    ambulance:"ambulance",
    busy_tone:"busy_tone",
    carhorn:"klaxon",
    carhorn1:"klaxon1",
    doorbell:"sonnette de porte",
    engine:"moteur",
    laser:"laser",
    meebot:"meeBot",
    police_car_1:"police_car_1",
    police_car_2:"police_car_2",
    ringtones:"sonneries",
    robot:"robot",
    telephone_call:"telephone_call",
    touch_tone:"touch_tone",
    wave:"saluer",
  /*设置音效弹出框音效文件国际化  end*/

    variable_named_popup_placeholder :"Variable",
    title_variable_set : 'Définir la variable',
    variable_named_popup_msg :"le nom de variable contient des caractères invalides",
    variable_named_too_long : "le nom d'utilisateur est limité à %1 caractères",
    speed:"vitesse",
    speed_VS:"très lentement",
    speed_S:"lentement",
    speed_M:"au centre",
    speed_V:"rapide",
    speed_VF:"très rapide",
    speed_no_value:"Direction sans roue de l'équipement en cours",
    speed_only_360_value:"L'équipement en cours ne dispose d'aucune direction sans roues 360",
    lights_tips:"L'équipement en cours ne dispose d'aucune lumière 360",
    exit_tips:"Le programme en cours ne peut être enregistré, souhaitez-vous néanmoins quitter ?",
    project_has_no_change:"Le programme en cours ne peut être modifié",
    close_blue:"La fonctionnalité Bluetooth est activée, le modèle se déconnecte-t-il ?",
    posture_link:"Le modèle n'est pas connecté. Veuillez d'abord connecter le modèle",
    posture_link_popup_title:"Le modèle se connecte",
    posture_link_popup_cancel:"annuler",
    posture_link_popup_ok:"OK",
    recording_name_repeat:"Répétition du nom enregistré",
    recording_named_too_long : "Le nom est trop long, veuillez saisir un autre nom",
    recording_alert_title:"Erreur",
    recording_alert_content:"impossible d'accorder le privilège",
    recording_alert_ok:"OK",
    help_title:"Présentation du bloc",
    newProjectName:"NewProject",
    sysVoiceName:"voix",
    exit_popup_cancel:"Annuler",
    exit_popup_ok:"OK",
    exit_popup_title:"Conseils",
    recording_data_tips:"Le système en cours ne dispose d'aucun fichier d'enregistrement personnalisé",
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
