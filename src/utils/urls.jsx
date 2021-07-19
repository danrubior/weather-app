const appid = "602afc9c0ece6d1bd9ada8d570438b70"

export const getWeatherUrl = ( city, countryCode ) => (`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`)

export const getForecastUrl = (city, countryCode) => (`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`)

