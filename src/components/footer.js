import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

const FooterContainer = styled(AppBar)(({ theme }) => ({
  top: 'auto',
  bottom: 0,
  backgroundColor: theme.palette.grey[900], // Dark background
  padding: theme.spacing(2, 0),
  position: 'fixed', // Fixed position
  width: '100%', // Full width
  marginTop: theme.spacing(4), // Adjust margin-top as needed
}));

export default function Footer() {
  return (
    <FooterContainer position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexDirection: 'column', alignItems: 'center' }}>
          {/* Footer Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'white',
              mb: 1,
            }}
          >
            TVK
          </Typography>

          {/* Contact Information */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white' }}>
            <PhoneIcon sx={{ fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: 'white' }}>
              Contact us: (123) 456-7890 | info@tvk.com
            </Typography>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
            <Tooltip title="Facebook">
              <IconButton sx={{ color: 'white' }} href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter">
              <IconButton sx={{ color: 'white' }} href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton sx={{ color: 'white' }} href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Footer Bottom Text */}
          <Typography variant="body2" sx={{ color: 'gray', mt: 2, textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} TVK. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </FooterContainer>
  );
}
