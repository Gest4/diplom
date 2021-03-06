var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
    question: "Сколько в маске 255.255.255.255/32 доступных ip адресов?",//70%=3 85%=4
    a: "1",
    b: "3",
    c: "10",
    answer: "A"
  },
  {
    question: "Какой ip адрес у шлюза/роутера, если у устройства в той же подсети адрес 192.168.0.2, подсеть 255.255.255.254?",
    a: "192.168.1.1",
    b: "192.168.0.1",
    c: "10.0.0.1",
    answer: "B"
  },
  {
    question: "Какая команда вызывает удобную оболочку для настройки сервера в Windows Server?",
    a: "SCONFIG",
    b: "MSCONFIG",
    c: "CONFIG",
    answer: "A"
  },
  {
    question: "Какая команда инициализирует вход в режим конфигурации Cisco?",
    a: "TERM",
    b: "CONT",
    c: "CONF T",
    answer: "C"
  },
  {
    question: "Какая команда меняет имя устройства Cisco?",//5
    a: "NAME",
    b: "HOSTNAME",
    c: "HOST",
    answer: "B"
  },
  {
    question: "Какая команда меняет шлюз устройства Cisco?",
    a: "ip default-gateway",
    b: "ip set-gateway",
    c: "ip gateway",
    answer: "A"
  },
  {
    question: "Имеется сеть 128.138.243.0/16, какая сетевая маска больше подходит?",
    a: "255.255.0.0",
    b: "255.255.255.0",
    c: "255.0.0.0",
    answer: "A"
  },
  {
    question: "В чем разница кабеля обжатого по стандарту TIA-568B от TIA-568А?",
    a: "Тип передачи данных",
    b: "Скорость",
    c: "Цвет",
    answer: "C"
  },
  {
    question: "Какова максимальная скорость на стандарте беспроводной связи 802.11n?",
    a: "до 1 гб/c",
    b: "до 600 мб/c",
    c: "до 100 мб/c",
    answer: "B"
  },
  {
    question: "Что такое DHCP?",//10
    a: "Сервер который выдаёт ip адрес",
    b: "Сервер который выдаёт mac адрес",
    c: "Сервер который выдаёт адрес места жительства",
    answer: "A"
  },
  {
    question: "Команда установки Apache?",
    a: "install apache2",
    b: "sudo apt install apache2",
    c: "apt apache2",
    answer: "B"
  },
  {
    question: "Дата создания интернета в мире?",
    a: "1969",
    b: "1970",
    c: "1960",
    answer: "A"
  },
  {
    question: "Дата создания Линукс?",
    a: "1980",
    b: "1990",
    c: "1991",
    answer: "C"
  },
  {
    question: "Дата создания Windows?",
    a: "1980",
    b: "1985",
    c: "1990",
    answer: "B"
  },
  {
    question: "Дата создания протокола TCP/IP?",//15
    a: "1972",
    b: "1970",
    c: "1980",
    answer: "A"
  },
  {
    question: "Дата первого сайта в мире?",
    a: "1991",
    b: "1990",
    c: "1980",
    answer: "A"
  },
  {
    question: "В какой стране был основан Абилимпикс?",
    a: "Россия",
    b: "США",
    c: "Япония",
    answer: "C"
  },
  {
    question: "В каком году провели первые соревнования Абилимпикс?",
    a: "1972",
    b: "1975",
    c: "1979",
    answer: "A"
  },
  {
    question: "В каком году была основана Международная Федерация Абилимпикс?",
    a: "1990",
    b: "1991",
    c: "2000",
    answer: "B"
  },
  {
    question: "С какого года соревнования Абилимпикс проводятся России?",//20
    a: "2000",
    b: "2014",
    c: "2015",
    answer: "B"
  },
  {
    question: "Команда обновление базы данных пакетов Linux.",
    a: "get-apt update",
    b: "sudo apt-get",
    c: "sudo apt-get update",
    answer: "C"
  },
  {
    question: "Команда запуска редактора реестра.",
    a: "REGEDIT",
    b: "RGEDIT",
    c: "RESEDIT",
    answer: "A"
  },
  {
    question: "Команда проверки диска.",
    a: "CHECKDISK",
    b: "CHECKDSK",
    c: "CHKDSK",
    answer: "C"
  },
  {
    question: "Команда дефрагментации диска.",
    a: "DEFRAG DISK",
    b: "DEFRAG",
    c: "DEFRAGMENT",
    answer: "B"
  },
  {
    question: "Команда выхода из командной строки.",//25
    a: "END",
    b: "EXIT",
    c: "EX",
    answer: "B"
  }
];
// this get function is short for the getElementById function
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
      test.innerHTML = "<h2>Вы ответили правильно на "+correct+" из "+questions.length+" вопросов, оценка 5</h2>"
  if (correct <=24) {
      test.innerHTML = "<h2>Вы ответили правильно на "+correct+" из "+questions.length+" вопросов, оценка 4</h2>"
  if (correct <=21) {
      test.innerHTML = "<h2>Вы ответили правильно на "+correct+" из "+questions.length+" вопросов, оценка 3</h2>"
  if (correct <=18) {
      test.innerHTML = "<h2>Вы ответили правильно на "+correct+" из "+questions.length+" вопросов, оценка 2</h2>"
    }}};
    get("test_status").innerHTML = "Тест завершён";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Вопрос "+(pos+1)+" из "+questions.length;

  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // display the question
  test.innerHTML = "<h3>"+question+"</h3><br>";
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<h4><label> <input type='radio' name='choices' value='A'> "+chA+"</label></h4><br>";
  test.innerHTML += "<h4><label> <input type='radio' name='choices' value='B'> "+chB+"</label></h4><br>";
  test.innerHTML += "<h4><label> <input type='radio' name='choices' value='C'> "+chC+"</label></h4><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Далее</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);
