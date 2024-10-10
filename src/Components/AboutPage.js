import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button, styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from './Footer';


// Update the StyledButton component
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  borderRadius: '50px',
  padding: '10px 20px',
  color: 'white',
  fontWeight: 'bold',
  fontFamily: '"Noto Serif", serif',
  '&:hover': {
    backgroundColor: 'rgba(0, 48, 73, 1)',
    color: '#ffffff',
    borderRadius: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    padding: '8px 16px',
  },
}));

function AboutPage() {
  return (
    <>  
    <Box sx={{ paddingTop: { xs: '100px', sm: '150px' }, textAlign: 'center', fontFamily: '"Noto Serif", serif', fontWeight: 'bold' }}>
      <Container className="about-page">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' } }}>
          About Us
        </Typography>
        
        <Typography variant="h5" sx={{ marginBottom: '40px', fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }} paragraph>
          Our bank has been serving the community for over 50 years, providing reliable financial services and innovative solutions to meet our customers' needs.
        </Typography>
      </Container>

      {/* Update full-width image section */}
      <Box sx={{ width: '100%', height: { xs: '200px', sm: '300px', md: '400px' }, marginBottom: '0px' }}>
        <img
          src="https://img.freepik.com/premium-photo/group-men-suits-posing-picture_1072138-2824.jpg"
          alt="Our Bank Building"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      {/* Update "One App for All" section */}
      <Box sx={{ 
        backgroundColor: '#052155', 
        color: 'white', 
        padding: { xs: '30px 0 80px', md: '40px 0 100px' }, 
        marginBottom: '40px',
        position: 'relative'
      }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' } }}>
            One App for All Your Banking Needs
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: '800px', margin: '0 auto 20px', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            Experience the convenience of managing all your finances in one place. Our app provides seamless access to your accounts, bill payments, investments, and more. Join thousands of satisfied customers who have simplified their banking with us.
          </Typography>
          <StyledButton 
            variant="text" 
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            Create Account
          </StyledButton>
        </Container>
      </Box>

      {/* Update horizontal card section */}
      <Container sx={{ 
        marginTop: { xs: '-60px', sm: '-80px', md: '-100px' },
        marginBottom: '40px', 
        position: 'relative',
        zIndex: 1
      }}>
        <Card sx={{ padding: { xs: '10px', sm: '20px' }, borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Grid container spacing={2} justifyContent="center">
            {[
              { title: 'Active Users', value: '5M+', color: '#FFB703' },
              { title: 'App Ranking', value: '#1', color: '#FB8500' },
              { title: 'Countries', value: '50+', color: '#219EBC' },
              { title: 'Awards', value: '20+', color: '#8ECAE6' },
            ].map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Card elevation={0} sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  backgroundColor: item.color,
                  color: 'white',
                  borderRadius: '10px',
                  padding: { xs: '10px', sm: '20px' }
                }}>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' } }}>
                    {item.value}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                    {item.title}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>

      {/* Update Transparent, honest, reliable section */}
      <Container sx={{ marginTop: { xs: '40px', md: '60px' }, marginBottom: { xs: '40px', md: '60px' } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom align="left" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' } }}>
              Transparent, Honest, Reliable
            </Typography>
            <Typography variant="body1" paragraph align="left" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              At our online bank, we believe in transparency and honesty. That's why we offer a variety of products and services, each with clear terms and conditions. We also pride ourselves on our excellent customer service.
            </Typography>
            <Typography variant="body1" paragraph align="left" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Our team is available 24/7 to answer any questions you may have or to help you resolve any issues you encounter. We know that banking can be stressful, so we strive to make it as hassle-free as possible.
            </Typography>
            <Typography variant="body1" paragraph align="left" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Our online bank is committed to giving back to our community. We believe that as a financial institution, we have a responsibility to support local organizations and charities. That's why we donate a portion of our profits to worthy causes each year.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.stockcake.com/public/d/a/a/daaffae5-834d-4b88-8cb8-c1c1d93a58f1_large/towering-glass-skyscraper-stockcake.jpg"
              alt="Transparent Banking"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: { xs: '300px', md: '400px' },
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Update Careers section */}
      <Box sx={{ backgroundColor: '#f5f5f5', padding: { xs: '40px 0', md: '60px 0' } }}>
        <Container>
          <Typography variant="h2" component="h2" sx={{ marginBottom: '40px', fontWeight: 'bold', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
            Careers
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: "Our Company Culture",
                image: "https://static.vecteezy.com/system/resources/thumbnails/026/969/911/small/creative-architect-projecting-on-the-big-drawings-in-the-dark-loft-office-or-cafe-photo.jpg"
              },
              {
                title: "Our Offices",
                image: "https://png.pngtree.com/background/20230512/original/pngtree-business-office-dark-background-picture-image_2502836.jpg"
              },
              {
                title: "Open Positions",
                image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-49934,resizemode-75,msid-98130991/jobs/mid-career/job-openings-rise-in-tier-2-locations-dry-up-in-top-cities-study.jpg"
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: '20px' }}>
                  <CardMedia
                    component="img"
                    height="170"
                    image={item.image}
                    alt={item.title}
                    sx={{ 
                      padding: '16px',
                      borderRadius: '20px',
                      objectFit: 'cover'
                    }}
                  />
                  <CardContent sx={{ py: 1 }}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
    <Footer />
    </>
  );
}

export default AboutPage;