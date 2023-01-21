/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const weatherApp = (() => {\r\n    const placeInput = document.querySelector('.header__input')\r\n\r\n    const warnPopup = document.querySelector('.warn')\r\n    const warnPopupText = document.querySelector('.warn__text')\r\n    const warnPopupClose = document.querySelector('.warn__close')\r\n\r\n    const content = document.querySelector('.content')\r\n    const contentName = document.querySelector('.content__name')\r\n    const contentTemp = document.querySelector('.content__temp')\r\n    const contentMin = document.querySelector('.content__mintemp')\r\n    const contentMax = document.querySelector('.content__maxtemp')\r\n    const contentFeelslike = document.querySelector('.content__feelslike')\r\n\r\n    let isShowWarning = false\r\n\r\n    const start = () => {\r\n        handleSubmitPlace()\r\n        handleWarnPopupClose()\r\n    }\r\n\r\n    const handleSubmitPlace = () => {\r\n        document.addEventListener('keydown', event => {\r\n            if (event.key === 'Enter' && !isShowWarning) {\r\n                if (!placeInput.value) {\r\n                    showWarn('You must filled the place input.')\r\n                } else {\r\n                    renderContent(getWeatherData(placeInput.value))\r\n                }\r\n                placeInput.value = ''\r\n            }\r\n        })\r\n    }\r\n    \r\n    const renderContent = (response) => {\r\n        response.then(data => {\r\n            contentName.innerText = data.name\r\n            contentTemp.innerText = data.temp + '°C'\r\n            contentMin.innerHTML = `Min:<br>${data.tempMin}°C`\r\n            contentMax.innerHTML = `Max:<br>${data.tempMax}°C`\r\n            contentFeelslike.innerHTML = `Feels like ${data.feelsLike}°C`\r\n        })\r\n    }\r\n\r\n    async function getWeatherData(place) {\r\n        try {\r\n            let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + place + '&units=metric&appid=67d8c2ace68a5c670c57dacbb9164044', {mode: 'cors'})\r\n            if (response.status == '404') {\r\n                throw new Error('Cannot find the place you are looking for.')\r\n            }\r\n            response = await response.json()\r\n            return {\r\n                temp: response.main.temp,\r\n                tempMax: response.main.temp_max,\r\n                tempMin: response.main.temp_min,\r\n                feelsLike: response.main.feels_like,\r\n                name: response.name\r\n            }\r\n        } catch(error) {\r\n            showWarn(error)\r\n        } finally {\r\n            console.clear()\r\n        }\r\n    }\r\n\r\n    const showWarn = text => {\r\n        isShowWarning = true\r\n        warnPopup.classList.add('show')\r\n        warnPopupText.innerText = text\r\n    }\r\n\r\n    const handleWarnPopupClose = () => {\r\n        warnPopupClose.addEventListener('click', function() {\r\n            warnPopup.classList.remove('show')\r\n            isShowWarning = false\r\n        })\r\n    }\r\n\r\n    return {start}\r\n})()\r\n\r\ndocument.addEventListener('DOMContentLoaded', weatherApp.start)\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;