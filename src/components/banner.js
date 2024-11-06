import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: 600, md: 900, lg: 1200 }, // Responsive max width
        px: { xs: 2, sm: 4, md: 6 }, // Padding adjustments for each screen size
        mx: 'auto', // Centers the Box horizontally
        textAlign: 'center', // Centers text within the Box
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }, // Responsive font sizes for h3
          fontWeight: 700,
        }}
      >
        Election Results Dashboard 2024
      </Typography>
      
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' }, // Responsive font sizes for h5
          color: 'text.secondary',
          mt: 2,
        }}
      >
        Final 2024 Presidential Election Results
      </Typography>
    </Box>
  );
}
