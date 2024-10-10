import React from 'react';
import { 
  Card, 
  CardContent, 
  Grid, 
  TextField, 
  Button, 
  Typography, 
  Box,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import Footer from './Footer';


function InternetBanking() {
  return (
    <>
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      marginTop: { xs: '20px', sm: '40px', md: '60px' },
      fontFamily: 'Noto Serif, serif',
      fontWeight: 'bold',
      padding: { xs: '10px', sm: '20px' }
    }}>
      <Card sx={{ 
        width: '100%', 
        maxWidth: 1200, 
        borderRadius: '20px',  
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <Grid container>
          {/* Left side - Create Account Form */}
          <Grid item xs={12} md={6}>
            <CardContent sx={{ padding: { xs: '20px', sm: '40px', md: '80px' } }}>
              <Typography variant="h5" gutterBottom>
                Create Account
              </Typography>
              <form>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  required
                  InputProps={{
                    sx: { borderRadius: '30px' }
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                  required
                  InputProps={{
                    sx: { borderRadius: '30px' }
                  }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  margin="normal"
                  required
                  InputProps={{
                    sx: { borderRadius: '30px' }
                  }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  required
                  InputProps={{
                    sx: { borderRadius: '30px' }
                  }}
                />
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  margin="normal"
                  required
                  InputProps={{
                    sx: { borderRadius: '30px' }
                  }}
                />
                
                <FormControlLabel
                  control={
                    <Checkbox 
                      required
                      color="primary"
                    />
                  }
                  label="I have read and agree to the terms and conditions"
                  sx={{ mt: 2, mb: 2 }}
                />
                
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                      width: '100%',
                      borderRadius: '20px',
                      backgroundColor: '#052155',
                      marginBottom: '20px',
                      py: 1,
                    }}
                  >
                    Create Business Account
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Grid>

          {/* Right side - Text and Image */}
          <Grid item xs={12} md={6} sx={{ padding: { xs: '10px', sm: '20px' } }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center',
              height: '100%',
              backgroundColor: '#d7f0fe',
              borderRadius: '20px',
              padding: { xs: '20px', sm: '30px', md: '40px' },
              textAlign: 'center'
            }}>
              <Typography variant="h6" gutterBottom>
              Tired of contact forms?
              </Typography>
              <Typography variant="body1" paragraph>
              Download our mobile app and simply scan QR code below and finish setting up your account from your mobile phone.              </Typography>
              <Box
                component="img"
                src="/qr.jpeg"
                alt="Internet Banking"
                sx={{ 
                  width: { xs: '150px', sm: '200px' },
                  height: 'auto',  // Maintain aspect ratio
                  marginTop: '20px',
                  borderRadius: '8px'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
    <Footer />
    </>
  );
}

export default InternetBanking;
