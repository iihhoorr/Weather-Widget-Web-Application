export interface WeatherData {
    date: string;
    morning?: string;
    afternoon?: string;
    evening?: string;
    night?: string;
  }
  
  export interface WeatherResponse {
    today: WeatherData;
    tomorrow: WeatherData;
  }