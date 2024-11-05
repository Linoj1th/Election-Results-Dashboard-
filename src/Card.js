import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

const cards = [
  {
    title: 'Anura kumara',
    image: '/anura-kumara-dissanayake-2.jpg', // Relative path from the public folder
    // description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
  },
  {
    title: 'Sajith',
    image: '/Sajith-Premadasa (1).jpg', // Placeholder image, assuming it's added in the public folder
    // description: 'Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes.',
  },
  {
    title: 'Ranil',
    image: '/ranil-700.jpg',
    // description: 'Frogs are amphibians in the order Anura, known for their jumping abilities, croaking sounds, and slimy skin.',
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
              height="90%"
              image={card.image}
              alt={card.title}
              sx={{ objectFit: 'cover' }} // Ensure the image covers the area
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: 100 }}> {/* Fixed height for content */}
              <Typography gutterBottom variant="h5" component="div" sx={{ flexGrow: 1 }}>
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
