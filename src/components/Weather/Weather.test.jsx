import React from 'react'
import Weather from './Weather'
import { findAllByRole, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// TDD (Test Driven Development = Desarrollo Guiado por Pruebas)
test("Weather render sunny", async () => {
  //AAA Arrange Act Assert
  //Obtenemos findByRole que devuelve el metodo render
  const { findByRole } = render(<Weather temperature={10} state="clear"/>)

  const temp = await findByRole("heading")

  expect(temp).toHaveTextContent("10")
})