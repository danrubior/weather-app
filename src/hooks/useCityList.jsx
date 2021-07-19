import {useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from '../utils/urls'
import getAllWeather from '../utils/transform/getAllWeather'
import { getCityCode } from '../utils/utils'


//Hook personalizado
const useCityList = (cities, allWeather, actions) => {
   //UseState
   // const [allWeather, setAllWeather] = useState({})
   const [error, setError] = useState(null)

   //AFTER RENDER
   useEffect(() => {

      //Funcion asincrona que realiza una peticion del tiempo actual en una ciudad
      const setWeather = async (city, countryCode) => {
         
         //Obtenemos la URL de la consulta a la API
         const url = getWeatherUrl(city, countryCode)

         //Esperamos los datos
         try {
            //Añadimos allWeather vacío, sin los valores, para que no se repitan las peticiones a la ciudad actuaL
            const propName = getCityCode(city, countryCode)
            // onSetAllWeather({ [propName]: {} })
            actions({ type: 'SET_ALL_WEATHER', payload: { [propName]: {} } })

            // PETICION
            const response = await axios.post(url)

            //Llamamos al transformador de datos
            const allWeatherAux = getAllWeather(response, city, countryCode)

            // Cambiamos AllWeather
            // onSetAllWeather(allWeatherAux)
            actions({ type: 'SET_ALL_WEATHER', payload: allWeatherAux })

         } catch (error) {
            if (error.response) { // Errores con respuesta del server
               setError("Ha ocurrido un error en el servidor del clima")
               // console.log(error)
            } else if (error.request) {  // Errores por no llegar al server
               setError("Verifique la conexión a Internet")
               // console.log(error)
            } else { // Errores imprevistos
               setError("Error al cargar los datos")
               // console.log(error)
            }
         }
      }

      //Recorremos el array y hacemos las peticiones si no existe el item
      cities.forEach(({ city, country, countryCode }) => {
         if(!allWeather[getCityCode(city, countryCode)]){
            setWeather(city, countryCode)
         }
      })

   }, [cities, allWeather, actions])

   // Retornamos las propiedades
   return { error, setError }
}

export default useCityList