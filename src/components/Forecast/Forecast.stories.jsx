import React from 'react'
import Forecast from './Forecast'

export default {
  title: "Forecast (Pronóstico)",
  component: Forecast
}

const forecastItemList = [
  {state: "clear", temperature: 21, hour: 7, weekDay: "Lunes"},
  {state: "clouds", temperature: 16, hour: 10, weekDay: "Martes"},
  {state: "rain", temperature: 12, hour: 12, weekDay: "Miércoles"},
  {state: "clouds", temperature: 14, hour: 18, weekDay: "Jueves"}
]

export const ForecastExample = () => {
  return <Forecast forecastItemList={forecastItemList} />
}