import React from 'react'
import ForecastItem from './ForecastItem'

export default {
  title: "ForecastItem",
  component: ForecastItem
}

//Exportamos los ejemplos
export const LunesSoleado = () => <ForecastItem hour={10} state="clear" temperature={21} weekDay="Lunes" />