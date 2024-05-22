import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import useIsSmallScreen from '../hooks/useIsSmallScreen';
import getResponsiveWidth from '../utils/getResponsiveWidth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();
  const isSmallScreen = useIsSmallScreen();

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      localStorage.setItem('email', email);
      navigate('/home');
    } else {
      setEmailError(true);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError(false);
    }
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
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        variant="outlined"
        margin="normal"
        fullWidth
        error={emailError}
        helperText={emailError ? 'Please enter a valid email' : ''}
      />
      <Button variant="contained" color="primary" onClick={handleSignUp} fullWidth>
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;