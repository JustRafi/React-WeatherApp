export interface WeatherBoxData {
   rainProb: number,
   weather: string,
   place: string,
   degrees: number,
   rainVol: number,
   uv: number,
   windSpeed: number
}

interface tempPerHour {
   degrees: number,
   hour: number
}
export interface TodaysForecastData {
   weather: string,
   date: string,
   temps: tempPerHour[]
}