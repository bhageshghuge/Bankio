import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, TextField, Button, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#052155',
        color: 'white',
        py: { xs: 4, md: 6 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom align="right">
              Subscribe to Our Newsletter
            </Typography>
            <Box component="form" onSubmit={handleSubscribe} sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'right', 
              alignItems: 'right', 
              gap: 2, 
              mb: 3 
            }}>
              <TextField
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ 
                  width: { xs: '100%', sm: '300px' },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '50px',
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                  },
                }}
                InputProps={{
                  style: { borderRadius: '50px' }
                }}
              />
              <Button 
                type="submit" 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#FFA500', 
                  '&:hover': { backgroundColor: '#FF8C00' },
                  borderRadius: '50px',
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', my: 3 }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              BankIO
            </Typography>
         
            <IconButton color="inherit" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
        
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block">Home</Link>
            <Link href="/products" color="inherit" display="block">Products</Link>
            <Link href="/about" color="inherit" display="block">About Us</Link>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              123 Banking Street<br />
              Financial District, City 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@bankio.com
            </Typography>
          </Grid>
          
        </Grid>

        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
          © {new Date().getFullYear()} BankIO. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
