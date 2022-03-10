var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
    question: "Сколько в маске 255.255.255.255/32 доступных ip адресов?",//70%=3 80%=
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
    question: "...",//10
    a: "...",
    b: "...",
    c: "...",
    answer: "B"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",//15
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",//20
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
  },
  {
    question: "...",//25
    a: "...",
    b: "...",
    c: "...",
    answer: "A"
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
    test.innerHTML = "<h2>Вы ответили правильно на "+correct+" из "+questions.length+" вопросов оценка 5</h2>"
    if (correct <=5) {
      test.innerHTML = "<h2>Вы ответили правильно на "+correct+" из "+questions.length+" вопросов оценка 2</h2>"
    };
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
  test.innerHTML += "<h4><label> <input type='radio' name='choices' value='A'> "+chA+"</label></h4><br><br>";
  test.innerHTML += "<h4><label> <input type='radio' name='choices' value='B'> "+chB+"</label></h4><br><br>";
  test.innerHTML += "<h4><label> <input type='radio' name='choices' value='C'> "+chC+"</label></h4><br><br>";
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
