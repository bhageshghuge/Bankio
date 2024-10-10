import React from 'react';
import { 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Container,
  styled,
  Box
} from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from './Footer';

const PageContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(30),
  fontFamily: '"Noto Serif", serif',
  fontWeight: 'bold',
}));

const Section = styled('section')(({ theme }) => ({
  marginBottom: theme.spacing(20),
}));

const StyledCard = styled(Card)(({ theme, planType }) => ({
  display: 'flex',
  flexDirection: 'column',
  // marginBottom: theme.spacing(4),
  width: '100%',
  boxShadow: 'none',
  border: 'none',
  backgroundColor: 
    planType === 'Basic Account' ? '#d3fee4' :
    planType === 'Premium Account' ? '#d7f0fe' :
    planType === 'Business Account' ? '#dbdefe' :
    'inherit',
  color: 
    planType === 'Basic Account' || planType === 'Premium Account' || planType === 'Business Account' ? 'black' : 'inherit',
}));

const CardInnerContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    width: '20%',
    marginBottom: 0,
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 100,
  width: 100,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  [theme.breakpoints.up('sm')]: {
    height: 150,
    width: 150,
  },
  [theme.breakpoints.up('md')]: {
    height: 200,
    width: 200,
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '80%',
  },
}));

const PriceText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme, mb }) => ({
  fontFamily: '"Noto Serif", serif',
  marginBottom: mb ? theme.spacing(mb) : 0,
}));

const PlanDetails = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(2),
    marginBottom: 0,
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: 'auto',
    minWidth: '150px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
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
}));

const StepCircle = styled(Box)(({ theme }) => ({
  width: 200,
  height: 200,
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  color: 'black',
  margin: '0 auto',
  boxShadow: theme.shadows[3], // Add a subtle shadow
}));

const StepContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
}));

const ArrowContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: theme.spacing(2, 0),
  transform: 'rotate(90deg)',
  [theme.breakpoints.up('md')]: {
    width: '10%',
    margin: 0,
    transform: 'rotate(0deg)',
  },
}));

const StepItemContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    width: '30%',
    marginBottom: 0,
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

function ProductsPage() {
  const plans = [
    {
      title: 'Basic Account',
      description: 'Essential banking for everyday needs',
      price: 'Free',
      features: [
        'No minimum balance',
        'Online and mobile banking',
        'Debit card',
        'ATM access',
        'Bill pay'
      ],
      image: 'https://cdn-icons-png.flaticon.com/512/8634/8634075.png',
    },
    {
      title: 'Premium Account',
      description: 'Enhanced features for active users',
      price: '$9.99/month',
      features: [
        'All Basic Account features',
        'No foreign transaction fees',
        'Higher daily ATM withdrawal limit',
        'Overdraft protection',
        'Priority customer support'
      ],
      image: 'https://cdn-icons-png.flaticon.com/512/2543/2543323.png',
    },
    {
      title: 'Business Account',
      description: 'Tailored for small to medium businesses',
      price: '$24.99/month',
      features: [
        'All Premium Account features',
        'Multiple user access',
        'Integrated payroll services',
        'Business credit card',
        'Dedicated account manager'
      ],
      image: 'https://cdn-icons-png.flaticon.com/512/2910/2910254.png',
    },
  ];

  const steps = [
    {
      title: 'Choose Your Plan',
      description: 'Select the account type that best fits your needs and financial goals.',
      icon: '🎯',
    },
    {
      title: 'Create Your Account',
      description: 'Fill out our simple online application and verify your identity.',
      icon: '📝',
    },
    {
      title: 'Enjoy Banking',
      description: 'Start using your new account and experience modern banking at its finest.',
      icon: '🎉',
    },
  ];

  return (
    <>
    <PageContainer>
      <Container maxWidth="lg" >
        <Section>
          <StyledTypography variant="h5" align="center" gutterBottom>
            Products
          </StyledTypography>
          <StyledTypography variant="h2" align="center" gutterBottom>
            Choose Your Perfect Plan
          </StyledTypography>
        </Section>
      </Container>

      <Section>
        {plans.map((plan, index) => (
          <StyledCard key={index} planType={plan.title}>
            <Container maxWidth="lg">
              <CardInnerContent>
                <ImageContainer>
                  <StyledCardMedia
                    image={plan.image}
                    title={plan.title}
                  />
                </ImageContainer>
                <StyledCardContent>
                  <PlanDetails>
                    <StyledTypography gutterBottom variant="h4" component="h2">
                      {plan.title}
                    </StyledTypography>
                    <StyledTypography variant="h6" gutterBottom>
                      {plan.description}
                    </StyledTypography>
                    <List>
                      {plan.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex}>
                          <ListItemIcon>
                            <CheckCircleOutline color="secondary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<StyledTypography>{feature}</StyledTypography>} 
                          />
                        </ListItem>
                      ))}
                    </List>
                  </PlanDetails>
                  <ButtonContainer>
                    <PriceText variant="h5">
                      {plan.price}
                    </PriceText>
                    <StyledButton 
                      variant="text" 
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Create Account
                    </StyledButton>
                  </ButtonContainer>
                </StyledCardContent>
              </CardInnerContent>
            </Container>
          </StyledCard>
        ))}
      </Section>

      <Section>
        <Container maxWidth="lg">
          <StyledTypography variant="h3" align="center" gutterBottom mb={8}>
            Get Started in 3 Easy Steps
          </StyledTypography>
          <StepContainer>
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <StepItemContainer>
                  <StepCircle>
                    <Typography variant="h2" align="center">
                      {step.icon}
                    </Typography>
                    <StyledTypography variant="h6" align="center" color="black">
                      {step.title}
                    </StyledTypography>
                  </StepCircle>
                  <Box mt={2}>
                    <StyledTypography variant="body1" align="center">
                      {step.description}
                    </StyledTypography>
                  </Box>
                </StepItemContainer>
                {index < steps.length - 1 && (
                  <ArrowContainer>
                    <ArrowForwardIcon color="primary" fontSize="large" />
                  </ArrowContainer>
                )}
              </React.Fragment>
            ))}
          </StepContainer>
        </Container>
      </Section>
      
    </PageContainer>
    <Footer />
    </>
  );
}

export default ProductsPage;