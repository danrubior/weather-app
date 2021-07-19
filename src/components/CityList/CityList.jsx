import React, {  } from 'react'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import useCityList from '../../hooks/useCityList'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import { getCityCode } from '../../utils/utils'
import { useWeatherStateContext, useWeatherDispatchContext } from '../../WeatherContext'

const CityListItem = React.memo(({ city, country, countryCode, weather, eventOnClickCity }) => {
   return (
      <ListItem
         button
         // Llevamos hacia arriba (MainPage) que recibira los parametros 
         onClick={() => eventOnClickCity(city, countryCode)}>
         <Grid container
            justify="center"
            alignItems="center"
         >
            <Grid item
               md={8}
               xs={12}>
               <CityInfo city={city} country={country} />
            </Grid>

            <Grid item
               sm={4}
               xs={12}>

               <Weather
                  temperature={weather && weather.temperature}
                  state={weather && weather.state} />
            </Grid>
         </Grid>
      </ListItem>
   )
})

CityListItem.displayName = "CityListItem"

// Funcion que renderiza cada Item de CityList
// renderCityAndCountry se va a convertir en una función que devuelve otra función 
const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry, weather) => {
   const { city, countryCode } = cityAndCountry

   //Renderizamos un item
   return <CityListItem  key={getCityCode(city, countryCode)} 
   eventOnClickCity={eventOnClickCity}
   weather={weather}
   {...cityAndCountry} />
}


// COMPONENT
//cities: es un array con items de ciudad y pais
const CityList = ({ cities, onClickCity }) => {
   //Obtenemos los context de App 
   const data = useWeatherStateContext()
   const actions = useWeatherDispatchContext()

   const { allWeather } = data
   // const { onSetAllWeather } = actions

   // Hook personalizado para cargar el Weather de la lista de ciudades
   const {error, setError } = useCityList(cities, allWeather, actions);

   //Render
   return (
      <div>
         {
            // Si error existe lo mostramos
            error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
         }

         <List>
            {
               //Mapeamos el array y le pasamos una funcion que devuelve otra funcion
               //Inicialmente - Le pasamos allWeather[propiedad] como parametro, que inicialmente el objeto está vacío
               cities.map(cityAndCountry => renderCityAndCountry(onClickCity)
                  (cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)])
               )
            }
         </List>
      </div>
   )
}

CityList.propTypes = {
   cities: PropTypes.arrayOf(PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired
   })).isRequired,
   onClickCity: PropTypes.func,
}

export default React.memo(CityList)
