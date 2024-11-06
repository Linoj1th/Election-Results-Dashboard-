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
    image: '/ranil-700.j', // Ensure this is in the public folder
    description: 'Current President of Sri Lanka.', // Example description
  },
  {
    title: 'Sajith Premadasa',
    image: '/Sajith-Premadasa (1).jpg',
    description: 'A notable political figure in Sri Lanka.',
  },
  {
    title: 'Ranil Wickremesinghe',
    image: '/ranil-700.jpg',
    description: 'An influential leader in Sri Lankan politics.',
  },
];

export default function ScrollCard() {
  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
      {cards.map((card, index) => (
        <Card key={index} sx={{ minWidth: 200, marginRight: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140" // Set a height for consistent display
              image={card.image}
              alt={card.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: 100 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ flexGrow: 1 }}>
                {card.title}
              </Typography>
              {card.description && (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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
