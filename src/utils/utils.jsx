import convertUnits from 'convert-units'

//Utils functions
export const getCityCode = (city, countryCode) => {
   return `${city}-${countryCode}`
}

export const toCelsius = (temp) => Number(convertUnits(temp).from("K").to("C").toFixed(0))

export const msToKmh = (num) => Number(convertUnits(num).from("m/s").to("km/h").toFixed(1))