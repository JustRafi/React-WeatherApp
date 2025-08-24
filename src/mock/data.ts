import type { WeatherBoxData } from "../types/data";

export const mockWeatherData: WeatherBoxData[] = [
  {
    rainProb: 70,
    weather: "Cloudy",
    place: "New York",
    degrees: 22,
    rainVol: 2.5,
    uv: 5,
    windSpeed: 12,
  },
  {
    rainProb: 20,
    weather: "Sunny",
    place: "Los Angeles",
    degrees: 28,
    rainVol: 0,
    uv: 8,
    windSpeed: 5,
  },
  {
    rainProb: 50,
    weather: "Rainy",
    place: "London",
    degrees: 16,
    rainVol: 5.2,
    uv: 3,
    windSpeed: 15,
  },
  {
    rainProb: 10,
    weather: "Clear",
    place: "Tokyo",
    degrees: 30,
    rainVol: 0,
    uv: 9,
    windSpeed: 8,
  },
  {
    rainProb: 80,
    weather: "Thunderstorm",
    place: "Mumbai",
    degrees: 25,
    rainVol: 12,
    uv: 6,
    windSpeed: 20,
  },
];
