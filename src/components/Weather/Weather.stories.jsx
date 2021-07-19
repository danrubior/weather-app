import React from 'react'
import Weather from './Weather'

export default {
   title: "Weather",
   component: Weather,
   argTypes: {
      temperature: { control: { type: "number" } },
      state: { control: { type: "select", options: ["clouds", "clear", "fog", "rain", "snow", "drizzle", "thunderstorm"] } }
   }
}

const Template = (args) => <Weather {...args} />

export const WeatherSunny = Template.bind({})
WeatherSunny.args = { temperature: 10, state: "clear" }

export const WeatherCloud = Template.bind({})
WeatherCloud.args = { temperature: 10, state: "clouds" }