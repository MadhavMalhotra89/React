import axios from 'axios';

const API_KEY = '8ff9242e51cc63ad64af2a9d114b24b8';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}