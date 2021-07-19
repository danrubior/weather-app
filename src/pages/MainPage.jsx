import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from '../components/AppFrame'
import CityList from '../components/CityList'
import { getCities } from '../utils/serviceCities'

//Page Component
const MainPage = () => {
   //Hook de estado
   const history = useHistory()
  
   const onClickhandler = React.useCallback((city, countryCode) => {
      // history.push permite alterar la URL
      // /city/ES/Almeria
      history.push(`/city/${countryCode}/${city}`)
   }, [history])

   return (
      <AppFrame>
         <Paper elevation={3}>
            <CityList
            cities={getCities()}
            onClickCity={onClickhandler} />
         </Paper>
      </AppFrame>
   )
}

export default MainPage
