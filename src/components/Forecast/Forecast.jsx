import React from 'react'
import PropTypes from 'prop-types'
import ForecastItem from '../ForecastItem'
import Grid from '@material-ui/core/Grid'
import { validValues } from '../IconState'

//Funcion renderizadora de componentes
const renderForecastItem = (item) => {
   //Obtenemos las propiedades del item
   const { state, temperature, hour, weekDay } = item;

   //Devolvemos un componente de ForecastItem
   return (
      <Grid item key={`${weekDay}${hour}`}
         data-testid="forecast-item-container">
         <ForecastItem
            state={state}
            temperature={temperature}
            hour={hour}
            weekDay={weekDay}></ForecastItem>
      </Grid>

   )
}

//Componente
const Forecast = ({ forecastItemList }) => {
   return (
      <Grid container
         justify="space-around">
         {
            forecastItemList.map((forecast) => renderForecastItem(forecast))
         }
      </Grid>
   )
}

//Validacion
Forecast.propTypes = {
   forecastItemList: PropTypes.arrayOf(PropTypes.shape({
      state: PropTypes.oneOf(validValues).isRequired,
      temperature: PropTypes.number.isRequired,
      hour: PropTypes.number.isRequired,
      weekDay: PropTypes.string.isRequired,
   })).isRequired,
}

export default Forecast
