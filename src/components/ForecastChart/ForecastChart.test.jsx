import React from 'react'
import { render,findByTestId, queryByTestId, getByTestId } from '@testing-library/react'
import ForecastChart from '../ForecastChart'

test("ForecastChart render", async () => {

  const data = [
    { "dayHour": "Jue 18", "min": 14, "max": 22, },
    { "dayHour": "Vie 06", "min": 18, "max": 27, }
  ]



  const { queryByTestId, getByTestId } = render(
    <ForecastChart data={data} type="LineChart" width={600} height={300} />)
    
    const chart = await queryByTestId("chart-container")

})