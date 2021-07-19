import React from 'react'
import { findbyText, render } from '@testing-library/react'
import WeatherDetails from "./WeatherDetails";


var humidity = 10
var wind = 14

// findByText: Permite encontrar un componente por el texto que encuentra
test("WeatherDetails test", async () => {
  const { findByText } = render(<WeatherDetails humidity={80} wind={14} />)

  //Buscamos si encuentra los valores introducidos en el render de arriba con REGEX
  var wind = await findByText(/14/);
  var humidity = await findByText(/80/);

  //Assert - Esperamos los valores
  expect(wind).toHaveTextContent("Viento: 14 km/h");
  expect(humidity).toHaveTextContent("Humedad: 80%");
})