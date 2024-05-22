import { useState } from 'react';
import { Autocomplete, TextField, Button, Box } from '@mui/material';
import { europeanCapitals } from '../data/europeanCapitals';

const CityInput = ({ onSubmit }: { onSubmit: (city: string) => void }) => {
  const [city, setCity] = useState<string | null>(null);

  const handleSubmit = () => {
    if (city) {
      onSubmit(city);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={3} width="100%">
      <Autocomplete
        options={europeanCapitals}
        value={city}
        onChange={(event, newValue) => setCity(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select a city"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        )}
        sx={{ width: '100%' }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
        Get Weather
      </Button>
    </Box>
  );
};

export default CityInput;