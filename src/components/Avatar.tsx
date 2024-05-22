import { Avatar as MUIAvatar, Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Avatar = () => {
  const email = localStorage.getItem('email');
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box position="absolute" top={10} right={10} display="flex" alignItems="center">
      <MUIAvatar>{email?.charAt(0).toUpperCase()}</MUIAvatar>
      {isLargeScreen && email && (
        <Typography variant="body1" ml={2}>
          {email}
        </Typography>
      )}
    </Box>
  );
};

export default Avatar;