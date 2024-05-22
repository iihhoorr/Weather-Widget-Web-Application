import { useState } from 'react';
import Avatar from '../components/Avatar';
import CityInput from '../components/CityInput';
import WeatherCard from '../components/WeatherCard';
import { Box, CircularProgress } from '@mui/material';
import useIsSmallScreen from '../hooks/useIsSmallScreen';
import getResponsiveWidth from '../utils/getResponsiveWidth';
import { WeatherResponse } from '../types';

const Home = () => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const isSmallScreen = useIsSmallScreen();

  const fetchWeather = (city: string) => {
    setLoading(true);
    setWeatherData(null);
    setSelectedCity(city);

    setTimeout(() => {
      const mockData: WeatherResponse = {
        today: {
          date: new Date().toISOString().split('T')[0],
          morning: getRandomWeather(),
          afternoon: getRandomWeather(),
          evening: getRandomWeather(),
          night: getRandomWeather(),
        },
        tomorrow: {
          date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
          morning: getRandomWeather(),
          afternoon: getRandomWeather(),
          evening: getRandomWeather(),
          night: getRandomWeather(),
        },
      };
      setWeatherData(mockData);
      setLoading(false);
    }, 1000);
  };

  const getRandomWeather = () => {
    const weatherConditions = ['Sunny', 'Cloudy', 'Rainy', 'Clear', 'Snowy', 'Windy'];
    const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    let temperature;

    switch (condition) {
      case 'Sunny':
        temperature = Math.floor(Math.random() * 15) + 25; // 25-40°C
        break;
      case 'Rainy':
        temperature = Math.floor(Math.random() * 10) + 10; // 10-20°C
        break;
      case 'Snowy':
        temperature = Math.floor(Math.random() * 10) - 5; // -5 to 5°C
        break;
      default:
        temperature = Math.floor(Math.random() * 15) + 15; // 15-30°C
        break;
    }

    return `${condition}, ${temperature}°C`;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={getResponsiveWidth(isSmallScreen)}
    >
      <Avatar />
      <CityInput onSubmit={fetchWeather} />
      {loading && <CircularProgress sx={{ mt: 3 }} />}
      {weatherData && selectedCity && <WeatherCard city={selectedCity} data={weatherData} />}
    </Box>
  );
};

export default Home;