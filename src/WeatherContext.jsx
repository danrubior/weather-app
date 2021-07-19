import React, { useContext, useReducer } from 'react'

//Inicializamos los context que proveen state y dispatch / data - actions
const WeatherStateContext = React.createContext()
const WeatherDispatchContext = React.createContext()

//Inicializamos las actions
const initialValue = {
   allWeather: {},
   allChartData: {},
   allForecastItemList: {}
}

// Generamos cada accion modificadora del state
// Permite modificar el state, recibe el "state anterior" y la accion
const reducer = (state, action) => {
   switch (action.type) {
      case 'SET_ALL_WEATHER':
         const weatherCity = action.payload
         const newAllWeather = { ...state.allWeather, ...weatherCity }
         return { ...state, allWeather: newAllWeather }

      case 'SET_CHART_DATA':
         const chartDataCity = action.payload
         const newAllChartData = { ...state.allChartData, ...chartDataCity }
         return { ...state, allChartData: newAllChartData }
      case 'SET_FORECAST_ITEM_LIST':
         const forecastItemListCity = action.payload
         const newAllForecastItemListCity = { ...state.allForecastItemList, ...forecastItemListCity }
         return { ...state, allForecastItemList: newAllForecastItemListCity }
      default:
         return state
   }
}


const WeatherContext = ({ children }) => {
   //Hook useReducer: Engloba varios useState
   const [state, dispatch] = useReducer(reducer, initialValue)

   return (
      <WeatherDispatchContext.Provider value={dispatch}>
         <WeatherStateContext.Provider value={state}>
            {children}
         </WeatherStateContext.Provider>
      </WeatherDispatchContext.Provider>
   )
}

const useWeatherStateContext = () => {
   const state = useContext(WeatherStateContext)

   if(!state){
      throw Error("Must set state provider")
   }

   return state
}

const useWeatherDispatchContext = () => {
   const dispatch = useContext(WeatherDispatchContext)

   if(!dispatch){
      throw Error("Must set dispatch provider")
   }

   return dispatch
}

export {
   WeatherContext,
   useWeatherStateContext,
   useWeatherDispatchContext
}