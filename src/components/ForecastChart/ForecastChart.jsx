import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const validCharts = ["LineChart", "Barchart"];
const renderChartByType = (props, marginSize) => {

  //Object destructuring
  const { data, type } = props;

  let chart = null;

  // Comprobamos el tipo
  switch (type) {
    case "BarChart":
      chart = (
        <BarChart data-testid="chart-container"
          data={data}
          margin={marginSize}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dayHour" />
          <YAxis unit="°C" />
          <Tooltip />
          <Legend />
          <Bar dataKey="max" fill="#FF0033" />
          <Bar dataKey="min" fill="#0000FF" />
        </BarChart>
      )
      break;
    default:
      chart = (
        <LineChart data-testid="chart-container"
          margin={marginSize}
          data={data}>
          <XAxis dataKey="dayHour" />
          <YAxis unit="°C" />
          <CartesianGrid />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="max" stroke="#FF0033" />
          <Line type="monotone" dataKey="min" stroke="#0000FF" />
        </LineChart>
      )
      break;
  }

  return chart;
}

//Componente
const ForecastChart = (props) => {
   const marginSize = useMemo(() => ({ top: 20, right: 5, left: 5, bottom: 20 }), [])

  // Generamos el grafico dependiendo del tipo
    return (
      <ResponsiveContainer height={300} width={"95%"}>
        {renderChartByType(props, marginSize)}
      </ResponsiveContainer>
    )

}

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    dayHour: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    hasTemps: PropTypes.bool
  })).isRequired,
  type: PropTypes.oneOf(validCharts)
}

export default ForecastChart
