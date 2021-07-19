import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
  title: "CityList",
  component: CityList
}

const cities = [
   { city: "Almería", country: "España", countryCode: "ES"},
   { city: "Asturias", country: "España", countryCode: "ES" },
   { city: "París", country: "France", countryCode: "FR" },
   { city: "Berlín", country: "Germany", countryCode: "DE" },
]

const data = { allWeather: {} }

export const CityListExample = () => <CityList data={data} cities={cities} onClickCity={action("Click en city")} />