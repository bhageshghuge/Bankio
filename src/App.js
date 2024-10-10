import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './Components/Navbar.js';
import HomePage from './Components/Homepage.js';
import ProductsPage from './Components/ProductPage.js';
import AboutPage from './Components/AboutPage.js';
import BusinessSolutionsPage from './Components/BusinessSolutionsPage.js';
import InternetBanking from './Components/InternetBanking.js';
// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // You can customize this color
    },
    secondary: {
      main: '#f50057', // You can customize this color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
          <Route path="/internet-banking" element={<InternetBanking />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;