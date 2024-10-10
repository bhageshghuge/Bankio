import React from 'react';
import { 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  styled
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Footer from './Footer';

const HeroSection = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  padding: theme.spacing(4, 0, 3),
  marginTop: '80px',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0, 6),
    marginTop: '180px',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

// Add these new styled components
const BottomLeftCard = styled(StyledCard)(({ theme }) => ({
  backgroundColor: '#d3fee4',
  borderRadius: '20px',
  boxShadow: 'none',
  padding: theme.spacing(4),
  fontFamily: '"Noto Serif", serif',
  fontWeight: 'bold',
  marginBottom: theme.spacing(6), // Add margin to the bottom
}));

const BottomRightCard = styled(StyledCard)(({ theme }) => ({
  backgroundColor: '#dbdefe',
  borderRadius: '20px',
  boxShadow: 'none',
  padding: theme.spacing(4),
  fontFamily: '"Noto Serif", serif',
  fontWeight: 'bold',
  marginBottom: theme.spacing(6), // Add margin to the bottom
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

const BigCard = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
  margin: '0 auto',
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(8),
  borderRadius: '20px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    maxWidth: 1200,
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(10),
  },
}));

const BackgroundImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: '5%',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '100px',
  height: 'auto',
  zIndex: 2,
  [theme.breakpoints.up('md')]: {
    width: '200px',
  },
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  backgroundColor: 'white',
  color: 'black',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
  boxShadow: 'none',
  marginTop: '10px',
}));

const TopCard = styled(StyledCard)(({ theme }) => ({
  backgroundColor: '#d7f0fe',
  fontFamily: '"Noto Serif", serif',
  fontWeight: 'bold',
  padding: theme.spacing(4),
  borderRadius: '20px',
  boxShadow: 'none',
}));

// Add these new styled components
const OverlayCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(-3),
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'auto',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1),
  zIndex: 1,
  marginBottom: '10px',
  [theme.breakpoints.up('md')]: {
    bottom: theme.spacing(-6),
    left: '53%',
    padding: theme.spacing(2),
  },
}));

const SmallImage = styled('img')({
  width: '40px',
  height: '40px',
  marginBottom: '8px',
});

// Add these new styled components
const BenefitsSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(8, 0),
}));

const BenefitCircle = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: '50%',
  backgroundColor: '#f0f0f0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1),
  textAlign: 'center',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    width: 150,
    height: 150,
    padding: theme.spacing(2),
  },
}));

const BenefitIcon = styled('img')({
  width: '40px',
  height: '40px',
  marginBottom: '8px',
});

// Add this new styled component for the Create Account button
const CreateAccountButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  textTransform: 'none',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(8),
  backgroundColor: '#052155', // You can change this to match your color scheme
  '&:hover': {
    backgroundColor: '#115293',
  },
}));

function BusinessSolutionsPage() {
  const navigate = useNavigate();

  // Remove or comment out unused variables
  // const solutions = [ ... ];

  const featuredSolutions = [
    {
      title: 'Control Your Business',
      description: 'Integrate all aspects of your business operations with our comprehensive ERP solution.',
    },
    {
      title: 'Automated Payments',
      description: 'Dont waste time on manual payments, use our automated payment system to save you time and money.',
    },
    {
      title: 'Team Collaboration',
      description: 'Our team collaboration tools will help you and your team work together more effectively.',
    },
  ];

  const overlayImages = [
    "https://t4.ftcdn.net/jpg/05/97/55/33/360_F_597553380_QNow5Ij1JYNnm4hdYlenBxM14BuhYpeN.png",
    "https://thumbs.dreamstime.com/b/collaboration-icon-black-white-vector-sign-collaboration-icon-vector-line-logo-mark-symbol-set-collection-outline-style-326702841.jpg"
  ];

  const benefits = [
    { icon: 'https://e7.pngegg.com/pngimages/606/517/png-clipart-silhouette-emoticon-smiley-black-and-white-emoticon-smiley-face-black-and-white-white-face-thumbnail.png', text: 'No Transfer Fees' },
    { icon: 'https://e7.pngegg.com/pngimages/365/996/png-clipart-computer-icons-system-integration-customer-relationship-management-integral-others-miscellaneous-logo.png', text: 'App Integration' },
    { icon: 'https://e7.pngegg.com/pngimages/271/291/png-clipart-document-icon-invoice-computer-icons-electronic-billing-receipt-invoices-drawing-miscellaneous-angle-thumbnail.png', text: 'Easy Invoicing' },
    { icon: 'https://e7.pngegg.com/pngimages/824/183/png-clipart-black-padlock-illustration-key-lock-unlocked-lock-s-monochrome-black-and-white-thumbnail.png', text: 'High Security System' },
    { icon: 'https://e7.pngegg.com/pngimages/386/389/png-clipart-envelop-folder-credit-card-debit-card-cooperative-bank-computer-icons-credit-card-black-angle-text-thumbnail.png', text: 'Card Management' },
  ];

  const handleCreateAccount = () => {
    navigate('/internet-banking');
    window.scrollTo(0, 0);
  };

  return (
    <div className="business-solutions-page">
      <HeroSection>
        <Container maxWidth="xl">
          <Typography component="h5" variant="h5" align="center" sx={{ fontFamily: '"Noto Serif", serif', fontWeight: 'bold' }} gutterBottom>
            Business Solutions
          </Typography>
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              width: '100%',
              fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: 1.2,
              marginBottom: 2,
              fontFamily: '"Noto Serif", serif',
              fontWeight: 'bold',
            }}
          >
            We got your business needs covered
          </Typography>
        </Container>
      </HeroSection>
      
      <Box sx={{ backgroundColor: '#f0f0f0', width: '100%', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: '"Noto Serif", serif', fontWeight: 'bold', mb: 4, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
            Featured Solutions
          </Typography>
          <BigCard>
            <BackgroundImage src="https://chainstack.com/wp-content/themes/chainstack/img/gradient-Subgraphs-white.svg" alt="Background decoration" />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TopCard>
                  <StyledCardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                      {featuredSolutions[0].title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {featuredSolutions[0].description}
                    </Typography>
                    <LearnMoreButton variant="contained">Request Demo</LearnMoreButton>
                  </StyledCardContent>
                </TopCard>
              </Grid>
              {featuredSolutions.slice(1).map((solution, index) => (
                <Grid item key={index} xs={12} md={6} sx={{ position: 'relative', mb: { xs: 4, md: 0 } }}>
                  {index === 0 ? (
                    <BottomLeftCard>
                      <StyledCardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {solution.title}
                        </Typography>
                        <Typography variant="body2" paragraph>
                          {solution.description}
                        </Typography>
                      </StyledCardContent>
                    </BottomLeftCard>
                  ) : (
                    <BottomRightCard>
                      <StyledCardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {solution.title}
                        </Typography>
                        <Typography variant="body2" paragraph>
                          {solution.description}
                        </Typography>
                      </StyledCardContent>
                    </BottomRightCard>
                  )}
                  <OverlayCard>
                    <SmallImage src={overlayImages[index]} alt={`Icon ${index + 1}`} />
                    <Typography variant="body2" align="center">
                      {index === 0 ? "Streamline your payments" : "Enhance team productivity"}
                    </Typography>
                  </OverlayCard>
                </Grid>
              ))}
            </Grid>
          </BigCard>
        </Container>
      </Box>
      
      <BenefitsSection>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: '"Noto Serif", serif', fontWeight: 'bold', mb: 4, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
            Other Benefits
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {benefits.map((benefit, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <BenefitCircle>
                  <BenefitIcon src={benefit.icon} alt={benefit.text} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '0.7rem', md: '0.875rem' } }}>
                    {benefit.text}
                  </Typography>
                </BenefitCircle>
              </Grid>
            ))}
          </Grid>
          
          {/* Updated Create Account button */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CreateAccountButton
              variant="contained"
              color="primary"
              onClick={handleCreateAccount}
            >
              Create Business Account
            </CreateAccountButton>
          </Box>
        </Container>
      </BenefitsSection>
      <Footer />
    </div>
  );
}

export default BusinessSolutionsPage;