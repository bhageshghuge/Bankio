import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LockIcon from '@mui/icons-material/Lock'; // Add this import
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

// Remove or comment out this line
// export const navbarBackgroundColor = 'rgba(0, 48, 73, 0.8)';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent', // Make the background transparent
  boxShadow: 'none',
  position: 'absolute', // Changed to 'absolute'
  top: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.appBar + 1, // Increase z-index to ensure it's above other elements
  transition: 'background-color 0.3s ease',
  backdropFilter: 'blur(10px)', // Add a blur effect to create a frosted glass look
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: '"Noto Serif", serif', 
  padding: '15px 0',
  fontWeight: 'semibold',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',

});

const NavButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme, isHome }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    color: isHome ? 'white' : 'black',
  },
}));

const StyledButton = styled(Button)(({ theme, isHome, isInternetBanking }) => ({
  color: isHome ? 'white' : 'black',
  fontFamily: theme.typography.fontFamily,
  '&:hover': {
    backgroundColor: isHome ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
  },
  fontWeight: 'semibold',
  margin: '0 10px',
  ...(isInternetBanking && {
    border: `2px solid ${isHome ? 'white' : 'black'}`,
    borderRadius: '20px',
    padding: '6px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Add space between icon and text
  }),
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Business Solutions', path: '/business-solutions' },
    { label: 'Internet Banking', path: '/internet-banking' }, // New item added
  ];

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Typography 
          variant="h6" 
          component={Link}
          to="/"
          sx={{ 
            flexGrow: 0, // Changed from 1 to 0
            color: isHome ? 'white' : 'black',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginRight: 'auto', // This pushes the other elements to the right
          }}
        >
          BankIO
        </Typography>
        <NavButtons>
          {menuItems.map((item) => (
            <StyledButton 
              key={item.path} 
              component={Link} 
              to={item.path}
              isHome={isHome}
              isInternetBanking={item.label === 'Internet Banking'}
            >
              {item.label}
              {item.label === 'Internet Banking' && <LockIcon fontSize="small" />}
              
            </StyledButton>
          ))}
        </NavButtons>
        <MobileMenuButton
          edge="end"
          aria-label="menu"
          onClick={handleMenuOpen}
          isHome={isHome}
        >
          <MenuIcon />
        </MobileMenuButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleMenuClose}
              sx={{ color: 'black' }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Navbar;