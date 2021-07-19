import { getCityCode, toCelsius, msToKmh } from "../utils"

const getAllWeather = (response, city, countryCode) => {
   const { data } = response
   
   //Hacemos la conversión de los datos obtenidos
   const temperature = toCelsius(data.main.temp)
   const state = data.weather[0].main.toLowerCase()
   const humidity = data.main.humidity
   const wind = msToKmh(data.wind.speed)


   const propName = getCityCode(city, countryCode) //Ej: [Almería-españa]
   const propValue = { temperature, state, humidity, wind } //Ej: {temperature: 12, state: "sunny"}

   //Retornamos el objeto con la ciudad ({Almeria-España: temperature: 20, state: clouds})
   return ({ [propName]: propValue })
}

export default getAllWeather