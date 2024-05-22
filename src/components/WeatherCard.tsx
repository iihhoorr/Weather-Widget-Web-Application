import { Card, CardContent, Typography, Box } from '@mui/material';
import { WeatherResponse } from '../types';

const WeatherCard = ({ city, data }: { city: string; data: WeatherResponse }) => {
  const currentHour = new Date().getHours();
  const getForecast = (time: string) => {
    if (time === 'morning' && currentHour < 12) return data.today.morning;
    if (time === 'afternoon' && currentHour < 18) return data.today.afternoon;
    if (time === 'evening' && currentHour < 21) return data.today.evening;
    if (time === 'night') return data.today.night;
    return null;
  };

  return (
    <Card sx={{ mt: 3, width: '100%', maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>{city}</Typography>
        <Typography variant="h5">Today's Weather</Typography>
        <Typography>Date: {data.today.date}</Typography>
        {getForecast('morning') && <Typography>Morning: {getForecast('morning')}</Typography>}
        {getForecast('afternoon') && <Typography>Afternoon: {getForecast('afternoon')}</Typography>}
        {getForecast('evening') && <Typography>Evening: {getForecast('evening')}</Typography>}
        {getForecast('night') && <Typography>Night: {getForecast('night')}</Typography>}

        <Box mt={2}>
          <Typography variant="h5">Tomorrow's Weather</Typography>
          <Typography>Date: {data.tomorrow.date}</Typography>
          <Typography>Morning: {data.tomorrow.morning}</Typography>
          <Typography>Afternoon: {data.tomorrow.afternoon}</Typography>
          <Typography>Evening: {data.tomorrow.evening}</Typography>
          <Typography>Night: {data.tomorrow.night}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;