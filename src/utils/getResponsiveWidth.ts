const getResponsiveWidth = (isSmallScreen: boolean) => ({
    width: isSmallScreen ? '90%' : '50%',
    mx: 'auto',
  });
  
  export default getResponsiveWidth;