import React from 'react';
import { 
  Container, Typography, Button, Grid2, Card, CardContent, CardMedia, Box 
} from '@mui/material';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from './Footer';
import Navbar from './Navbar'; // Import the Navbar component

// ... existing imports ...

const StyledHero = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(8, 0, 6),
  textAlign: 'center',
  minHeight: '100vh', // Make the hero section full viewport height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative', // Add this to make it a positioning context for the navbar
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: 350,
  width: 300,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 1,
  borderRadius: '16px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
    zIndex: 2,
  }
}));

function HomePage() {
  return (
    <>
      <StyledHero>
        <Navbar /> {/* Add the Navbar component here */}
        <Container maxWidth="xl">
          <Typography variant="h2" component="h1" gutterBottom sx={{ 
            fontFamily: '"Nato Sherif", serif', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } 
          }}>
            Welcome to BankIO
          </Typography>
          <Typography variant="h5" paragraph sx={{ 
            marginBottom: '2rem',
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } 
          }}>
            Your trusted partner for simple, secure, and innovative banking solutions.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: 'rgba(0, 48, 73, 1)',
              fontWeight: 'bold',
              fontFamily: '"Nato Sherif", serif',
              '&:hover': {
                backgroundColor: 'rgba(250, 250, 250, 1)',
              },
            }}
          >
            Open an Account
          </Button>
        </Container>
      </StyledHero>

      <Box sx={{ 
        position: 'relative',
        marginTop: { xs: '-50px', sm: '-75px', md: '-100px' }, 
        zIndex: 2,
        paddingX: { xs: 1, sm: 2 }, 
      }}>
        <Card sx={{ 
          maxWidth: '95%', 
          margin: '0 auto',
          borderRadius: '20px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          overflow: 'visible',
          backgroundColor: '#d7eeff',
        }}>
          <CardContent sx={{ padding: { xs: '1rem', sm: '1.5rem', md: '2rem' } }}> 
            <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ 
              fontFamily: '"Nato Sherif", sans-serif', 
              fontWeight: 'bold', 
              marginBottom: '2rem', 
              color: 'rgba(0, 48, 73, 1)',
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } // Responsive font size
            }}>
              Our Services
            </Typography>
            <Grid2 container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center"> 
              {[
                { title: 'Online Banking', image: 'https://www.enterpriseedges.com/wp-content/uploads/2019/07/EDG_02.jpg', description: 'Manage your accounts anytime,<br />anywhere with our secure online platform.' },
                { title: 'Mobile App', image: 'https://www.addevice.io/storage/ckeditor/uploads/images/637ba22ed92a7_how.to.create.a.banking.app.step.by.step.guide.1920.1080.1.png', description: 'Bank on-the-go with our feature-rich,<br />mobile application.' },
                { title: 'Savings Accounts', image: 'https://navi.com/blog/wp-content/uploads/2022/06/Savings-Account.jpg', description: 'Grow your wealth with our competitive,<br />interest rates.' },
                { title: 'Personal Loans', image: 'https://www.financialexpress.com/wp-content/uploads/2021/09/loan-1.jpg?w=440', description: 'Quick and easy personal loans,<br />for your financial needs.' },
                { title: 'Investment Services', image: 'https://images.shiksha.com/mediadata/images/articles/1707210782phpALmGHS.jpeg', description: 'Expert guidance and diverse portfolio<br />options for your investment goals.' }
              ].map((feature, index) => (
                <Grid2 item key={index} xs={12} sm={6} md={3} lg={3} sx={{ display: 'flex' }}>
                  <StyledCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image={feature.image}
                      alt={feature.title}
                      sx={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column', 
                    //   justifyContent: 'space-between',
                      textAlign: 'center'
                    }}>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ wordBreak: 'break-word', fontFamily: '"Nato Sherif", sans-serif', fontWeight: 'bold', marginBottom: 2, marginTop: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        dangerouslySetInnerHTML={{ __html: feature.description }}
                        sx={{ 
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          wordBreak: 'break-word',
                        }}
                      />
                    </CardContent>
                  </StyledCard>
                </Grid2>
              ))}
            </Grid2>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        padding: 4, 
      }}>
        {/* Left box for text content */}
        <Box sx={{ 
          flex: 1, 
          backgroundColor: 'white', 
          padding: 3, 
          textAlign: 'center'
        }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontFamily: '"Nato Sherif", sans-serif', fontWeight: 'bold', color: 'rgba(0, 48, 73, 1)' }}>
            Secure Banking for Your Future
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
            At BankIO, we understand the importance of financial security and growth. Our state-of-the-art security measures and innovative financial products are designed to protect your assets and help them grow.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
            Whether you're saving for a home, planning for retirement, or looking to invest, our expert team is here to guide you every step of the way. Experience the peace of mind that comes with banking at BankIO.
          </Typography>
          <Button 
            variant="text" 
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: 'transparent',
              borderRadius: '50px',
              padding: '10px 20px',

              color: 'rgba(0, 48, 73, 1)',
              fontWeight: 'bold',
              fontFamily: '"Nato Sherif", sans-serif',
              '&:hover': {
                backgroundColor: 'rgba(0, 48, 73, 1)',
                color: '#ffffff',
                borderRadius: '50px',
              },
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Right box for image */}
        <Box sx={{ 
          flex: 1, 
          backgroundColor: 'white', 
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            alt="Secure Banking"
            src="https://m.economictimes.com/thumb/msid-109691914,width-1200,height-900,resizemode-4,imgsize-43982/your-preference-for-digital-is-leaving-banks-with-a-bigger-bill.jpg"
          />
        </Box>
      </Box>

      {/* New section */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        padding: 4, 
      }}>
        {/* Left box for image */}
        <Box sx={{ 
          flex: 1, 
          backgroundColor: 'white', 
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            alt="Innovative Banking Solutions"
            src="https://theuxda.com/storage/app/media/blog/HERO%20Images%20JPG/Banking%20innovation.jpg"
          />
        </Box>

        {/* Right box for text content */}
        <Box sx={{ 
          flex: 1, 
          backgroundColor: 'white', 
          padding: 3, 
          textAlign: 'center'
        }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontFamily: '"Nato Sherif", sans-serif', fontWeight: 'bold', color: 'rgba(0, 48, 73, 1)' }}>
            Innovative Banking Solutions
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
            At BankIO, we're committed to providing cutting-edge banking solutions that meet the evolving needs of our customers. Our innovative approach combines technology with personalized service to deliver a seamless banking experience.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
            From advanced mobile banking features to AI-powered financial advice, we're constantly pushing the boundaries of what's possible in modern banking. Join us and experience the future of finance today.
          </Typography>
          <Button 
            variant="text" 
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: 'transparent',
              borderRadius: '50px',
              padding: '10px 20px',
              color: 'rgba(0, 48, 73, 1)',
              fontWeight: 'bold',
              fontFamily: '"Nato Sherif", sans-serif',
              '&:hover': {
                backgroundColor: 'rgba(0, 48, 73, 1)',
                color: '#ffffff',
                borderRadius: '50px',
              },
            }}
          >
            Discover More
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default HomePage;