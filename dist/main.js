/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// переменная, куда засунем JSON на время манипуляций\r\nlet hospitals = [];\r\n// переменная, чтобы идентифицировать запись списка\r\nlet index;\r\n\r\nif (localStorage.getItem('item') != undefined) {\r\n    // если локалстораж НЕ ПУСТОЙ, то выводим значение\r\n    hospitals = JSON.parse(localStorage.getItem('item'));\r\n    out();\r\n}\r\n\r\n// функция подгрузки содержимого ДЖСОН файла в локалстораж\r\ndocument.getElementById('loadBtn').onclick = function () {\r\n    let xhr = new XMLHttpRequest();\r\n    xhr.open('GET', 'lpu.json', true);\r\n    xhr.onreadystatechange = function () {\r\n        if (xhr.readyState === 4 && xhr.status === 200) {\r\n            localStorage.setItem('item', xhr.responseText);\r\n        }\r\n    };\r\n    xhr.send();\r\n    if (localStorage.getItem('item') != undefined) {\r\n        // если локалстораж НЕ ПУСТОЙ, то выводим значение\r\n        hospitals = JSON.parse(localStorage.getItem('item'));\r\n        out();\r\n    }\r\n}\r\n\r\n// функция добавления элемента в локалстораж и вывода на экран\r\ndocument.getElementById('addBtn').onclick = function () {\r\n    // считываем информацию с инпутов по нажатию на кнопку\r\n    let nameGet = document.getElementById('name').value;\r\n    let addressGet = document.getElementById('address').value;\r\n    let phoneGet = document.getElementById('phone').value;\r\n    // временная переменная, куда будут записываться данные при каждом клике\r\n    let temp = {};\r\n    // запись идёт по названиям свойств\r\n    temp.name = nameGet;\r\n    temp.address = addressGet;\r\n    temp.phone = phoneGet;\r\n    // записываем в последний элемент весь объект, который собрали с инпутов\r\n    hospitals[hospitals.length] = temp;\r\n    // выводим в див\r\n    out();\r\n    // записываем всё, что вывели в локалстораж\r\n    localStorage.setItem('item', JSON.stringify(hospitals));\r\n}\r\n\r\n// функция удаления по нажатию на кнопку \"Delete\" и вывода на экран\r\ndocument.getElementById('delBtn').onclick = function () {\r\n    // получаем номер нашего учреждения\r\n    id = document.getElementById('identify').value;\r\n    // сразу обнуляем значение, чтобы случайно пользователь нажав на кнопку\r\n    // не изменил чего-то лишнего\r\n    document.getElementById('identify').value = '';\r\n    // вытаскиваем с локалстоража всё, что записано в массив\r\n    hospitals = JSON.parse(localStorage.getItem('item'));\r\n    // удаляем из массива тот элемент, который указал пользователь\r\n    // но так как сплайс при не введенном значении начинает удалять\r\n    // самый последний элемент, то нужны проверки:\r\n    // 1. инпут не пустой 2. инпут является только число 3. инпут не равен пробелу \r\n    if (id != '' && isNaN(id) == false && id != ' ') {\r\n        hospitals.splice(id, 1);\r\n    }\r\n    // засовываем массив обратно в локалстораж\r\n    localStorage.setItem('item', JSON.stringify(hospitals));\r\n    // выводим обновлённый список\r\n    out();\r\n}\r\n\r\n// функция обновления записи по нажатию и вывода на экран\r\ndocument.getElementById('upBtn').onclick = function () {\r\n    // получаем номер нашего учреждения\r\n    id = document.getElementById('identify').value;\r\n    // сразу обнуляем значение, чтобы случайно пользователь нажав на кнопку\r\n    // не изменил чего-то лишнего\r\n    document.getElementById('identify').value = '';\r\n    // вытаскиваем с локалстоража всё, что записано в массив\r\n    hospitals = JSON.parse(localStorage.getItem('item'));\r\n    let temp = hospitals[id];\r\n    if (id != '' && isNaN(id) == false && id != ' ') {\r\n        temp.name = document.getElementById('name').value;\r\n        temp.address = document.getElementById('address').value;\r\n        temp.phone = document.getElementById('phone').value;\r\n    }\r\n    hospitals[id] = temp;\r\n    // // засовываем массив обратно в локалстораж\r\n    localStorage.setItem('item', JSON.stringify(hospitals));\r\n    // выводим обновлённый список\r\n    out();\r\n}\r\n\r\n\r\n\r\n// основная функция вывода на экран\r\nfunction out() {\r\n    // создаём строку, чтобы туда записать полученные значения с инпутов\r\n    let outList = '';\r\n    // в цикле перебираем всё, что содержимт объект со значениями\r\n    // и закидываем всё в одну строку разделяя переносом строки\r\n    for (let key in hospitals) {\r\n\r\n        outList += 'Идентификатор ' + key + ' || Название: ' + hospitals[key].name +\r\n            ' || Адрес: ' + hospitals[key].address + ' || Телефонный номер: ' +\r\n            hospitals[key].phone + '<br>';\r\n    }\r\n    // выводим эту строку в див\r\n    document.getElementById('out').innerHTML = outList;\r\n}\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });