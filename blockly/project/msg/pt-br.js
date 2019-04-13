var MSG = {
  title: "Código",
  blocks: "Blocos",
  linkTooltip: "Salvar e ligar aos blocos.",
  runTooltip: "Execute o programa definido pelos blocos na área de trabalho.",
  badCode: "Erro no programa:\n%1",
  timeout: "Máximo de iterações de execução excedido.",
  trashTooltip: "Descartar todos os blocos.",
  catLogic: "Lógica",
  catLoops: "Laços",
  catMath: "Matemática",
  catText: "Texto",
  catLists: "Listas",
  catColour: "Cor",
  catVariables: "Variáveis",
  catFunctions: "Funções",
  listVariable: "lista",
  textVariable: "texto",
  httpRequestError: "Houve um problema com a requisição.",
  linkAlert: "Compartilhe seus blocos com este link:\n\n%1",
  hashError: "Desculpe, '%1' não corresponde a um programa salvo.",
  xmlError: "Não foi possível carregar seu arquivo salvo. Talvez ele tenha sido criado com uma versão diferente do Blockly?",
  badXml: "Erro de análise XML:\n%1\n\nSelecione 'OK' para abandonar suas mudanças ou 'Cancelar' para editar o XML.",

  /**Toolbox begin*/
  /** toolbox的开始 */
  id_start: "Iniciar",
  /** toolbox的动作 */
  id_actions: "Movimentações",
  /** toolbox的运动 */
  id_moves : "Movimentações",
  /** toolbox的感知 */
  id_sensors : "Sensores",
  /** toolbox的事件 */
  id_events : "Eventos",
  /** toolbox的数学 */
  id_math : "Matemática",
  /** toolbox的控制 */
  id_control : "Controlo",
  /** toolbox的展示 */
  id_show : "Mostrar",
  /**Toolbox end*/

  /**Start Category begin */
  id_when_start : "Clique em \"Executar\" para iniciar",
  id_go_to_start : "Ir para Início",
  /**Start Category end */

  /** Movement Category begin */
  servo_angle_popup_title :"Definir ângulo de rotação do servomotor ",
  servo_angle_popup_close:"Fechar",
  servo_angle_popup_variable:"Variável",
  servo_angle_popup_angle:"Ângulo",
  servo_angle_popup_cancel :"Cancelar",
  servo_angle_popup_ok :"OK",

  rotate_servo_popup_clockwise:"Para a direita",
  rotate_servo_popup_anti_clockwise:"Para a esquerda",
  rotate_servo_popup_stop:"parar",
  rotate_servo_popup_title:"Modo de rotação",
  rotate_servo_popup_cancel:"Cancelar",
  rotate_servo_popup_ok:"OK",

  servo_status_popup_title:"Definir estado do servomotor",
  servo_status_popup_cancel:"Cancelar",
  servo_status_popup_ok:"OK",
  servo_status_popup_locking:"Bloquear",
  servo_status_popup_adjustable:"Desbloquear",
  servo_status_popup_tips:"Não é possível ajustar o servomotor correspondente para o robot no modo de bloqueio",

  posture_named_popup_title :"Nome da postura",
  posture_named_popup_cancel :"Cancelar",
  posture_named_popup_ok :"OK",
  posture_named_popup_placeholder :"Postura",
  posture_named_popup_msg :"O nome da postura contém caracteres inválidos",
  posture_named_too_long : "O nome da postura não pode exceder %1 caracteres",

  gyro_rotate_direction_popup_title :"Selecione a direção de rotação do servomotor",
  gyro_rotate_direction_popup_cancel :"Cancelar",
  gyro_rotate_direction_popup_ok :"OK",
  gyro_rotate_direction_popup_curVal :"Valor atual",
  gyro_rotate_direction_popup_course :"Ângulo de direção",
  gyro_rotate_direction_popup_horizontal :"Ângulo de rotação",
  gyro_rotate_direction_popup_house :"Ângulo de inclinação longitudinal",

  id_servo : 'servomotor',
  id_rotate : 'rodar',
  id_degree : 'grau',
  id_in : 'durante',
  id_millsecond : 'ms',

  id_rotate_circle : 'Rodar servomotor 360°',
  id_servos : 'Servomotores',
  id_run_to : 'executar para',

  id_all: 'Tudo',
  id_lock : 'bloquear',
  id_unlock : 'desbloquear',
  servo_id : 'ID',
  servo_angle : 'Ângulo',
  movement_gesture: 'Postura', 
  servo_direction : 'direção',
  servo_speed : 'velocidade',
  /** Movement Category end */

  /**Control Category begin */
  id_control_wait_for : 'aguardar por',
  id_control_repeat : 'repetir',
  id_control_repeat_times: 'vezes',
  id_control_wait:'aguardar',
  id_control_seconds:'segundos',
  id_math_not:'não',
  id_while : 'enquanto',
  id_until : 'até',
  id_repeat : 'executar',
  /**Control Category end */

  /*Event Category begin*/
  maincontrol_box :"Caixa de controlo principal",
  low_power :"Baixa potência",
  ir_sensor : "Sensor de IV",
  reflectance : "reflectância",
  touch_sensor:"Sensor de toque",
  status : "o estado é",
  title_touch_sensor : "Definição do sensor de toque",
  click : "Clicar",
  db_click : "Clicar duas vezes",
  press_hold : "Premir continuamente",
  release : "Soltar",
  gyroscope : "Giroscópio",
  angle : "ângulo",
  axie : 'eixo',
  title_device_tilt : "Definição do estado do Telemóvel/Dispositivo portátil",
  phone_pad :"Telemóvel/Dispositivo portátil",
  tilt_left : "Inclinar para a esquerda",
  tilt_right : "Inclinar para a direita",
  tilt_up : "Inclinar para cima",
  tilt_down : "Inclinar para baixo",
  tilt_swing : "Inclinar oscilação",
  /*Event Category end*/

  /** Show Category start */
  id_show_play_effect:'Reproduzir efeito',
  id_show_play_tune:'Reproduzir melodia',
  id_show_show_emoji:'Mostrar emoji',
  id_show_show_LEDs:'Mostrar LEDs',
  id_show_time_during:'durante',
  id_show_time_ms:'ms',
  id_show_times:'vezes',
  sound_effects_popup_title :"Definir efeitos de som",
  sound_effects_popup_cancel :"Cancelar",
  sound_effects_popup_ok :"OK",
  sound_effects_recording_add :"Adicionar nova gravação",
  sound_effects_recording_delete :"Eliminar",
  title_setting_light : "Luz de definição",
  title_setting_tune : "Ajuste da definição",
  title_setting_emotion : "Emoção da definição",
  id_all_bright: "radiante",
  id_custom: "personalizado",
  id_smile: 'sorridente',
  id_cry : 'choroso',
  id_sad : 'triste',
  id_wink : 'piscar de olho',
  id_dizzy : 'confuso',
  id_daze : 'surpreendido',
  id_open_eyes : 'olhos abertos',
  id_close_eyes : 'olhos fechados',
  /** Show Category end */

  /**Sensor Category begin */
  id_sensor_IR_sensor: 'Sensor de IV',
  id_sensor_reflectance_between_obstacle:'reflectância_entre_obstáculos',
  id_sensor_touch_sensor:'Sensor de toque',
  id_sensor_touch_sensor_status:'estado',
  id_sensor_gyroscope:'Giroscópio',
  id_sensor_angle:'ângulo',
  y_axie:'Ângulo de rotação',
  x_axie:'Ângulo de inclinação longitudinal',
  z_axie:'Ângulo de direção',
  servo:'Servomotor',
  id_sensor_set_gyroscope:'Definir giroscópio',
  id_sensor_angle_to_zero:'ângulo para 0',
  /**Sensor Category end */


  /**Math Category begin */
  id_math_variables_set_add : "%1 + %2",
  id_set : "definir",
  id_to : "para",
  /**Math Category end */
  

  /* Common section begin */
  btn_name_confirm : "ok",
  btn_name_cancel: "cancelar",
  /* Common section end*/

  id_start_info : 'Executar',
  id_stop_info : 'Parar',

  title_infrared_sensor : "Definição do Sensor Infravermelhos",
  current_value : 'valor atual',
  distance_1: 'demasiado perto',
  distance_2:'perto',
  distance_3:'média distância',
  distance_4:'afastado',
  distance_5:'demasiado afastado',

  /* need to be removed, wait to confirm */
  distance_very_near: 'demasiado perto',
  distance_near:'perto',
  distance_middle:'média distância',
  distance_far:'afastado',
  distance_very_far:'demasiado afastado',

  title_bluetooth_connect : "Ligação Bluetooth",
  title_time_adjust : "Ajuste da hora",


    /*运动  end*/
    index_back:"Retroceder",
    disconnected : "Desligado",

    /*项目  begin*/
    //保存项目
    add_project_placeholder : "Novo projeto",
    project_pop_ok_btn: "OK",
    project_pop_cancel_btn: "Cancelar",
    add_project_pop_title : "Nome do projeto",
    add_project_input_check : "Apenas pode introduzir 16 caracteres",
    project_name_too_long : "O nome do projeto não pode exceder %1 caracteres",
    project_name_popup_msg : "O nome do projeto contém caracteres inválidos",
    //是否保存项目
    is_add_project_pop_title :"Guardar projeto",
    is_add_project_pop_tips :"Guardar o projeto atual?",
    //项目列表
    project_list_title :"Os meus projetos",
    porject_alert_title:"Erro",
    porject_alert_tips:"Sugestões",
    porject_alert_content:"Parâmetro errado para o alvo operacional. Volte a verificá-lo!",
    porject_alert_content_01:"O nome do item já existe. Introduza-o novamente.",
    porject_alert_content_02:"Erro na operação do serviço base. A mensagem de erro é:",
    porject_alert_content_03:"Erro nos dados recebidos da base!",
    porject_alert_content_04:"Falha ao ler o projeto ",
    porject_alert_content_05:"O bloco de programa no ficheiro de projeto contém erros!",
    porject_alert_content_06:"Projeto guardado",
    porject_alert_btnText:"OK",
    /*项目  end*/
    add_recording_ok:"OK",
    recording_tips:"Gravação",
    id_control_break : 'Fora de circulação',
    id_blue_disconnect : 'O Bluetooth não está ligado',
    id_ok : 'OK',
    recording_title:"Gravação",
    recording_cancel:"Cancelar",
    recording_ok:"OK",
    recording_placeholder:"Introduza um nome de gravação",
    recording_popup_title:"Introdução do nome do ficheiro gravada",
    /*项目  end*/
    /*设置音效弹出框音效文件国际化  begin*/
    animal:"animal",
    machine:"máquina",
    recording:"gravação",
    bear:"urso",
    bird:"pássaro",
    chicken:"galinha",
    cow:"vaca",
    dog:"cão",
    elephant:"elefante",
    giraffe:"girafa",
    horse:"cavalo",
    lion:"leão",
    monkey:"macaco",
    pig:"porco",
    rhinoceros:"rinoceronte",
    sealions:"leões marinhos",
    tiger:"tigre",
    walrus:"morsa",
    ambulance:"ambulância",
    busy_tone:"tom_de_ocupado",
    carhorn:"buzina_de_carro",
    carhorn1:"buzina_de_carro1",
    doorbell:"campainha_de_porta",
    engine:"motor",
    laser:"laser",
    meebot:"meebot",
    police_car_1:"carro_de_polícia_1",
    police_car_2:"carro_de_polícia_2",
    ringtones:"toques",
    robot:"robot",
    telephone_call:"chamada_telefónica",
    touch_tone:"tom_de_toque",
    wave:"onda",
    /*设置音效弹出框音效文件国际化  end*/

    variable_named_popup_placeholder :"Variável",
    title_variable_set : 'Definir Variável',
    variable_named_popup_msg :"O nome da variável contém caracteres inválidos",
    variable_named_too_long : "O nome da variável não pode exceder %1 caracteres",
    speed:"velocidade",
    speed_VS:"muito lenta",
    speed_S:"lenta",
    speed_M:"média",
    speed_V:"rápida",
    speed_VF:"muito rápida",
    speed_no_value:"Controlo de direção sem rodas do equipamento atual",
    speed_only_360_value:"O equipamento atual não possui controlo de direção sem rodas 360",
    lights_tips:"O equipamento atual não possui luzes 360",
    exit_tips:"O programa atual não foi guardado. Pretende sair?",
    project_has_no_change:"O programa atual não foi alterado",
    close_blue:"O Bluetooth está ligado. Pretende desligá-lo?",
    posture_link:"O modelo não está ligado. Ligue primeiro o modelo",
    posture_link_popup_title:"O modelo foi ligado",
    posture_link_popup_cancel:"cancelar",
    posture_link_popup_ok:"ok",
    recording_name_repeat:"Nome gravado repetido",
    recording_named_too_long : "O nome é demasiado longo, introduza-o novamente",
    recording_alert_title:"Erro",
    recording_alert_content:"Falha ao conceder privilégios",
    recording_alert_ok:"OK",
    help_title:"Introdução do bloco",
    newProjectName:"NovoProjeto",
    sysVoiceName:"voz",
    exit_popup_cancel:"Cancelar",
    exit_popup_ok:"OK",
    exit_popup_title:"Sugestões",
    recording_data_tips:"O sistema atual não possui ficheiros de gravação personalizados"
};
