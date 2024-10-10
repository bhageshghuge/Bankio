import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Serif", serif',
    h1: {
      fontWeight: 700, // Bold
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600, // Semi-bold
    },
    body1: {
      fontWeight: 400, // Regular
    },
    button: {
      fontWeight: 600,
    },
  },
  // ... other theme settings ...
});

export default theme;
