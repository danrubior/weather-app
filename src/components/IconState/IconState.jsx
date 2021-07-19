import React from 'react'
import PropTypes from 'prop-types'

//Iconos
import {
  WiDaySunny,
  WiDayCloudy,
  WiRain,
  WiDayFog,
  WiSnow,
  WiThunderstorm,
  WiRaindrop
} from "react-icons/wi"

//Objeto que determina el identificador de Estado y su Icono
const stateByName = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  fog: WiDayFog,
  rain: WiRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm
}

export const validValues = ["clouds", "clear", "fog", "rain", "snow", "drizzle", "thunderstorm"]

//Componente
const IconState = ( {state} ) => {
  const StateByName = stateByName[state];

  return (
    <StateByName />
  )
}

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
