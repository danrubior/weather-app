import React from 'react'
import { render, findAllByTestId } from "@testing-library/react"
import Forecast from "./Forecast"

const forecastItemList = [
  {state: "clear", temperature: 21, hour: 7, weekDay: "Lunes"},
  {state: "clouds", temperature: 16, hour: 10, weekDay: "Martes"},
  {state: "rain", temperature: 12, hour: 12, weekDay: "Miércoles"},
  {state: "clouds", temperature: 14, hour: 18, weekDay: "Jueves"}
]

//Test 
test("Forecast render", async () => {
  
  // findAllByTestId nos permite encontrar cada item con esa marca
  const { findAllByTestId } = render(
  <Forecast forecastItemList={forecastItemList} />)

  const forecastItems = await findAllByTestId("forecast-item-container")

  //Assert
  expect(forecastItems).toHaveLength(forecastItemList.length)

})