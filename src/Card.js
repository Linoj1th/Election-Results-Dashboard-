import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
const cards = [
  {
    title: 'Anura Kumara',
    image: '/266.jpg', // Path is relative to the public folder
    description: 'Current President of Sri Lanka.',
  },
  {
    title: 'Sajith Premadasa',
    image: '/Sajith-Premadasa.jpg', // Ensure the correct image file is in the public folder
    description: 'A notable political figure in Sri Lanka.',
  },
  {
    title: 'Ranil Wickremesinghe',
    image: '/ranil-wickremesinghe-4.jpg', // Ensure the correct image file is in the public folder
    description: 'An influential leader in Sri Lankan politics.',
  },
  {
    title: 'Namal',
    image: '/namal.jpg', // Ensure the correct image file is in the public folder
    description: 'An influential leader in Sri Lankan politics.',
  },
];

export default function ScrollCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        padding: 2,
        gap: 2, // Add gap for spacing between cards
        maxWidth: { xs: '100%', sm: '80%', md: '60%' }, // Responsive max-width
        mx: 'auto', // Center the container
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            minWidth: { xs: 200, sm: 250, md: 300 }, // Responsive min-width
            flexShrink: 0, // Prevent cards from shrinking
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="180" // Set a responsive height
              image={card.image}
              alt={card.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center content
                padding: { xs: 1, sm: 2 }, // Responsive padding
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font size
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                {card.title}
              </Typography>
              {card.description && (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'center',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                  }}
                >
                  {card.description}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
