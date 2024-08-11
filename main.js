// Начало задания о возрасте.
var age = +prompt("Введтите свой возраст");

if (age > 6 && age <= 18) {
  alert("Вы еще молоды, Вам нужно учиться");
} else if (age >= 18 && age <= 50) {
  alert("Вам нужно работать");
} else if (age >= 50 && age <= 59) {
  alert("Вам скоро на пенсию");
} else if (age >= 59 && age <= 100) {
  alert("Вы пенсионер");
} else {
  alert("Что-то пошло не так");
}
// Конец задания о возрасте

// Начало задания время
const time = +prompt("Введите время: ");

switch (true) {
  case time >= 0 && time <= 7:
    alert(time + " часа ночи");
    break;

  case time > 7 && time <= 10:
    alert(time + " часов утра");
    break;

  case time >= 11 && time <= 17:
    alert(time + "часа дня");
    break;

  case time > 17 && time <= 23:
    alert(time + " часов вечера");
    break;

  default:
    alert("Нету такого времени");
}
// Коней задания время

// Начало задания Среднее число

var numberOne = +prompt("Введите первое число:");
var numberTwo = +prompt("Введите второе число:");
var numberThree = +prompt("Введите третье число:");

if (
  (numberOne > numberTwo && numberOne < numberThree) ||
  (numberOne < numberTwo && numberOne > numberThree)
) {
  alert("Среднее число " + numberOne);
} else if (
  (numberTwo > numberOne && numberTwo < numberThree) ||
  (numberTwo < numberOne && numberTwo > numberThree)
) {
  alert("Среднее число " + numberTwo);
} else if (
  (numberThree > numberOne && numberThree < numberTwo) ||
  (numberThree < numberOne && numberThree > numberTwo)
) {
  alert("Среднее число " + numberThree);
}

// Коней задания Среднее число
