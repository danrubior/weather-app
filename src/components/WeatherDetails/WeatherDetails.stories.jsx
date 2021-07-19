import React from 'react'
import WeatherDetails from './WeatherDetails'

export default {
  title: "WeatherDetails",
  component: WeatherDetails
}

//Exportamos las pruebas
export const WeatherDetailsExample = () => {
  return <WeatherDetails humidity={78} wind={20} />
}

