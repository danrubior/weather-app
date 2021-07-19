import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

//Componente
const WeatherDetails = ({ humidity, wind }) => {
  return (
    <div className="weather-details">
      <Typography>Humedad: {humidity}%</Typography>
      <Typography>Viento: {wind} km/h</Typography>
    </div>
  )
}

//Validacion
WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
}

export default WeatherDetails
