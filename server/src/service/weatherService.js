import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();
class Weather {
    constructor(temperature, description) {
        this.temperature = temperature;
        this.description = description;
    }
}
class WeatherService {
    constructor() {
        this.baseURL = process.env.API_BASE_URL;
        this.apiKey = process.env.API_KEY;
    }
    async fetchLocationData(query) {
        const url = `${this.baseURL}/geo/1.0/direct?q=${query}&limit=1&appid=${this.apiKey}`;
        const response = await fetch(url);
        return await response.json();
    }
    destructureLocationData(locationData) {
        return {
            lat: locationData[0].lat,
            lon: locationData[0].lon,
        };
    }
    buildWeatherQuery(coordinates) {
        return `${this.baseURL}/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}`;
    }
    async fetchWeatherData(coordinates) {
        const url = this.buildWeatherQuery(coordinates);
        const response = await fetch(url);
        return await response.json();
    }
    parseCurrentWeather(response) {
        return new Weather(response.main.temp, response.weather[0].description);
    }
    async getWeatherForCity(city) {
        const locationData = await this.fetchLocationData(city);
        const coordinates = this.destructureLocationData(locationData);
        const weatherData = await this.fetchWeatherData(coordinates);
        return this.parseCurrentWeather(weatherData);
    }
}
export default new WeatherService();
