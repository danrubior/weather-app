import moment from 'moment'
import 'moment/locale/es'
import { toCelsius } from '../utils'

const getChartData = (data) => {
   //Array de dias hacia adelante que habra
   const daysAhead = [0, 1, 2, 3, 4, 5];

   //En cada posicion añadimos el dia del item
   const days = daysAhead.map(d => moment().add(d, 'd'))

   //Generamos el Array de Objetos de dias
   const dataAux = days.map(day => {

      //Filtramos el ARRAY de de temp con el dia actual
      const tempObjArray = data.list.filter(
         item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()

            //Devolvemos el dia si coincide con el actual
            return dayOfYear === day.dayOfYear()
         }
      )

      //Obtenemos las temperaturas de CADA DIA en Kelvin
      const temps = tempObjArray.map(item => item.main.temp)

      //dayHour, min, max
      return ({
         dayHour: day.format('ddd'),
         min: toCelsius(Math.min(...temps)),
         max: toCelsius(Math.max(...temps)),
         hasTemps: (temps.length > 1 ? true : false)
      })
   }).filter(item => item.hasTemps)


   return dataAux
}

export default getChartData