import { useEffect, useDebugValue } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getForecastUrl } from '../utils/urls'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'
import { getCityCode } from '../utils/utils'

const useCityFullForecast = (allChartData, allForecastItemList, actions) => {
   //Parametros recibidos del la URL
   const { city, countryCode } = useParams()

   useDebugValue(`useCityPage ${city}`) //test

   //AFTER RENDER
   useEffect(() => {

      //Funcion ASYNC que realiza la PETICION
      const getForecast = async () => {
         
         const url = getForecastUrl(city, countryCode)
         const cityCode = getCityCode(city, countryCode)

         try {
            //Indicamos que la peticion se ha hecho
            // onSetChartData({ [cityCode]: {} })
            // onSetForecastItemList({ [cityCode]: {} })
            actions({ type: 'SET_CHART_DATA', payload: { [cityCode]: {} } })

            //Hacemos la peticion y esperamos
            const { data } = await axios.post(url)

            //AFTER RESPONSE
            //Transformamos los datos 
            const dataAux = getChartData(data)

            // Grafico de temperaturas
            // Le asignamos el ARRAY de días a la PROPIEDAD
            // onSetChartData({ [cityCode]: dataAux })

            //Disparamos la accion
            actions({ type: 'SET_CHART_DATA', payload: { [cityCode]: dataAux } })

            //Lista de Pronosticos posteriores
            const forecastItemListAux = getForecastItemList(data)
            
            //Modificamos el hook
            // onSetForecastItemList({ [cityCode]: forecastItemListAux })
            actions({ type: 'SET_FORECAST_ITEM_LIST', payload: { [cityCode]: forecastItemListAux } })

         } catch (error) {
            if (error.response) { // Errores con respuesta del server
               console.log("Ha ocurrido un error en el servidor del clima")
            } else if (error.request) {  // Errores por no llegar al server
               console.log("Verifique la conexión a Internet")
            } else { // Errores imprevistos
               console.log("Error al cargar los datos", error)
            }
         }
      }

      //Llamamos a la API y modificamos los hooks globales
      const cityCode = getCityCode(city, countryCode)
      if(allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]){
         getForecast()
      }

   }, [city, countryCode, allChartData, allForecastItemList, actions])

   //Devolvemos el objeto con las propiedades necesarias
   return { city, countryCode }
}

export default useCityFullForecast