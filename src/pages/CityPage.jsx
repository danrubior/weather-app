import React, { useMemo } from 'react'
import AppFrame from '../components/AppFrame'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import CityInfo from '../components/CityInfo'
import Forecast from '../components/Forecast/Forecast'
import useCityFullForecast from '../hooks/useCityFullForecast'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../utils/serviceCities'
import { useWeatherStateContext, useWeatherDispatchContext } from '../WeatherContext'


// Page Component
const CityPage = () => {
   const data = useWeatherStateContext()
   const actions = useWeatherDispatchContext()

   const { allWeather, allChartData, allForecastItemList } = data
   // const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions
   
   //Hooks
   const { city, countryCode } = useCityFullForecast(allChartData, allForecastItemList, actions)

   // Retornamos la instancia del array solo cuando cambie "city y countryCode"
   const cities = useMemo ( () => ([{ city, countryCode }]), [city, countryCode] )

   useCityList(cities, allWeather, actions)

   //Obtenemos el tiempo de la ciudad actual
   const cityCode = getCityCode(city, countryCode)

   //Obtenemos el objeto individual de la ciudad
   const weather = allWeather[cityCode]
   const chartData = allChartData[cityCode]
   const forecastItemList = allForecastItemList[cityCode]

   const country = countryCode && getCountryNameByCountryCode(countryCode)

   //Obtenemos los datos de weather
   const state = weather && weather.state
   const temp = weather && weather.temperature
   const humidity = weather && weather.humidity
   const wind = weather && weather.wind


   return (
      <AppFrame>
         <Grid container
            justify="center"
            direction="column"
            spacing={2}>
            <Grid item container
               xs={12}
               justify="center"
               alignItems="flex-end">
               <CityInfo city={city} country={country} />
            </Grid>

            <Grid container item xs={12} justify="center">
               <Weather state={state} temperature={temp} />
               {
                  humidity && wind &&
                  <WeatherDetails humidity={humidity} wind={wind} />
               }
            </Grid>

            <Grid item>
               {
                  //Barra de progreso si no hay datos
                  !chartData && !forecastItemList && <LinearProgress />
               }
            </Grid>

            <Grid item xs={12}>
               {
                  // Validacion con cortocircuito
                  Array.isArray(chartData) && <ForecastChart data={chartData} type="LineChart" width={500} height={300} />
               }
            </Grid>

            <Grid item xs={12}>
               {
                  forecastItemList && <Forecast forecastItemList={forecastItemList} />
               }
            </Grid>
         </Grid>
      </AppFrame>
   )
}

export default CityPage
