const cities = [
   { city: "Almería", country: "España", countryCode: "ES" },
   { city: "Madrid", country: "España", countryCode: "ES" },
   { city: "París", country: "Francia", countryCode: "FR" },
   { city: "Berlín", country: "Alemania", countryCode: "DE" },
]

export const getCities = () => (cities)


export const getCountryNameByCountryCode = (countryCode) => (
cities.filter(city => city.countryCode === countryCode)[0].country)