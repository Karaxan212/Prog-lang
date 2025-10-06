// Счетчик
var seconds = 0;
var minutes = 0;
var interval = null;
var speed = 1000; // начальная скорость 1 секунда

var counter = document.getElementById("counter");

// кнопки
var btnPlus = document.getElementById("speedPlus");
var btnMinus = document.getElementById("speedMinus");
var btnReset = document.getElementById("reset");

// функция обновления отображения
function updateDisplay() {
  var minStr = minutes < 10 ? "0" + minutes : minutes;
  var secStr = seconds < 10 ? "0" + seconds : seconds;
  counter.textContent = minStr + ":" + secStr;
}

// функция запуска таймера
function startTimer() {
  if (interval) clearInterval(interval);
  interval = setInterval(function () {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, speed);
}

// при старте сразу запускаем таймер
startTimer();

// Кнопка speed +
btnPlus.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightgreen"; // фон
  counter.style.color = "lightcoral"; // цифры
  speed = 500; // ускорение
  startTimer();
});

// Кнопка speed -
btnMinus.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightcoral"; // фон
  counter.style.color = "lightgreen"; // цифры
  speed = 2000; // замедление
  startTimer();
});

// Кнопка reset
btnReset.addEventListener("click", function () {
  document.body.style.backgroundColor = "gray"; // фон
  counter.style.color = "black"; // цифры
  minutes = 0;
  seconds = 0;
  speed = 1000;
  updateDisplay();
  startTimer();
});
