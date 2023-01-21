const weatherApp = (() => {
    const placeInput = document.querySelector('.header__input')

    const warnPopup = document.querySelector('.warn')
    const warnPopupText = document.querySelector('.warn__text')
    const warnPopupClose = document.querySelector('.warn__close')

    const content = document.querySelector('.content')
    const contentName = document.querySelector('.content__name')
    const contentTemp = document.querySelector('.content__temp')
    const contentMin = document.querySelector('.content__mintemp')
    const contentMax = document.querySelector('.content__maxtemp')
    const contentFeelslike = document.querySelector('.content__feelslike')

    let isShowWarning = false

    const start = () => {
        handleSubmitPlace()
        handleWarnPopupClose()
    }

    const handleSubmitPlace = () => {
        document.addEventListener('keydown', event => {
            if (event.key === 'Enter' && !isShowWarning) {
                if (!placeInput.value) {
                    showWarn('You must filled the place input.')
                } else {
                    renderContent(getWeatherData(placeInput.value))
                }
                placeInput.value = ''
            }
        })
    }
    
    const renderContent = (response) => {
        response.then(data => {
            contentName.innerText = data.name
            contentTemp.innerText = data.temp + '°C'
            contentMin.innerHTML = `Min:<br>${data.tempMin}°C`
            contentMax.innerHTML = `Max:<br>${data.tempMax}°C`
            contentFeelslike.innerHTML = `Feels like ${data.feelsLike}°C`
        })
    }

    async function getWeatherData(place) {
        try {
            let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + place + '&units=metric&appid=67d8c2ace68a5c670c57dacbb9164044', {mode: 'cors'})
            if (response.status == '404') {
                throw new Error('Cannot find the place you are looking for.')
            }
            response = await response.json()
            return {
                temp: response.main.temp,
                tempMax: response.main.temp_max,
                tempMin: response.main.temp_min,
                feelsLike: response.main.feels_like,
                name: response.name
            }
        } catch(error) {
            showWarn(error)
        } finally {
            console.clear()
        }
    }

    const showWarn = text => {
        isShowWarning = true
        warnPopup.classList.add('show')
        warnPopupText.innerText = text
    }

    const handleWarnPopupClose = () => {
        warnPopupClose.addEventListener('click', function() {
            warnPopup.classList.remove('show')
            isShowWarning = false
        })
    }

    return {start}
})()

document.addEventListener('DOMContentLoaded', weatherApp.start)