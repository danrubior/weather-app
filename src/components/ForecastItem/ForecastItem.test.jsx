import React from 'react'
import { render, findByText } from '@testing-library/react';
import ForecastItem from './ForecastItem'

test("ForecastItem render", async () => {
  //Se deben renderizar los diferentes textos

  const { findByText} = render(<ForecastItem state="clear" hour={10} temperature={21} weekDay="Lunes" />)

  const temp = await findByText(/21/)
  const hour = await findByText(/10/)
  const weekDay = await findByText("Lunes")

  //Assert, esperamos los datos
  expect(temp).toHaveTextContent("21 °C")
  expect(hour).toHaveTextContent("10")
  expect(weekDay).toHaveTextContent("Lunes")
})