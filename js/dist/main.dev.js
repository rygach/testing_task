"use strict";

// переменная, куда засунем JSON на время манипуляций
var hospitals = []; // переменная, чтобы идентифицировать запись списка

var index;

if (localStorage.getItem('item') != undefined) {
  // если локалстораж НЕ ПУСТОЙ, то выводим значение
  hospitals = JSON.parse(localStorage.getItem('item'));
  out();
} // функция подгрузки содержимого ДЖСОН файла в локалстораж


document.getElementById('loadBtn').onclick = function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'lpu.json', true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      localStorage.setItem('item', xhr.responseText);
    }
  };

  xhr.send();

  if (localStorage.getItem('item') != undefined) {
    // если локалстораж НЕ ПУСТОЙ, то выводим значение
    hospitals = JSON.parse(localStorage.getItem('item'));
    out();
  }
}; // функция добавления элемента в локалстораж и вывода на экран


document.getElementById('addBtn').onclick = function () {
  // считываем информацию с инпутов по нажатию на кнопку
  var nameGet = document.getElementById('name').value;
  var addressGet = document.getElementById('address').value;
  var phoneGet = document.getElementById('phone').value; // временная переменная, куда будут записываться данные при каждом клике

  var temp = {}; // запись идёт по названиям свойств

  temp.name = nameGet;
  temp.address = addressGet;
  temp.phone = phoneGet; // записываем в последний элемент весь объект, который собрали с инпутов

  hospitals[hospitals.length] = temp; // выводим в див

  out(); // записываем всё, что вывели в локалстораж

  localStorage.setItem('item', JSON.stringify(hospitals));
}; // функция удаления по нажатию на кнопку "Delete" и вывода на экран


document.getElementById('delBtn').onclick = function () {
  // получаем номер нашего учреждения
  id = document.getElementById('identify').value; // сразу обнуляем значение, чтобы случайно пользователь нажав на кнопку
  // не изменил чего-то лишнего

  document.getElementById('identify').value = ''; // вытаскиваем с локалстоража всё, что записано в массив

  hospitals = JSON.parse(localStorage.getItem('item')); // удаляем из массива тот элемент, который указал пользователь
  // но так как сплайс при не введенном значении начинает удалять
  // самый последний элемент, то нужны проверки:
  // 1. инпут не пустой 2. инпут является только число 3. инпут не равен пробелу 

  if (id != '' && isNaN(id) == false && id != ' ') {
    hospitals.splice(id, 1);
  } // засовываем массив обратно в локалстораж


  localStorage.setItem('item', JSON.stringify(hospitals)); // выводим обновлённый список

  out();
}; // функция обновления записи по нажатию и вывода на экран


document.getElementById('upBtn').onclick = function () {
  // получаем номер нашего учреждения
  id = document.getElementById('identify').value; // сразу обнуляем значение, чтобы случайно пользователь нажав на кнопку
  // не изменил чего-то лишнего

  document.getElementById('identify').value = ''; // вытаскиваем с локалстоража всё, что записано в массив

  hospitals = JSON.parse(localStorage.getItem('item'));
  var temp = hospitals[id];

  if (id != '' && isNaN(id) == false && id != ' ') {
    temp.name = document.getElementById('name').value;
    temp.address = document.getElementById('address').value;
    temp.phone = document.getElementById('phone').value;
  }

  hospitals[id] = temp; // // засовываем массив обратно в локалстораж

  localStorage.setItem('item', JSON.stringify(hospitals)); // выводим обновлённый список

  out();
}; // основная функция вывода на экран


function out() {
  // создаём строку, чтобы туда записать полученные значения с инпутов
  var outList = ''; // в цикле перебираем всё, что содержимт объект со значениями
  // и закидываем всё в одну строку разделяя переносом строки

  for (var key in hospitals) {
    outList += 'Идентификатор ' + key + ' || Название: ' + hospitals[key].name + ' || Адрес: ' + hospitals[key].address + ' || Телефонный номер: ' + hospitals[key].phone + '<br>';
  } // выводим эту строку в див


  document.getElementById('out').innerHTML = outList;
}