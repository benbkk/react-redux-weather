import axios from 'axios'

const API_KEY = '7e3610c315ab1b42dd8ce89c19fbacc9'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?i&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},th`
  const request = axios.get(url)

  console.log('Request: ', request )

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
