// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import CarouselSection from './components/CarouselSection/CarouselSection';
import NoticeNewsCards from './components/NoticeNewsCards/NoticeCards';
import Footer from './components/Footer/Footer'; // Footer component
import Map from './components/Map/map'; // Map component
import AboutUs from './components/AboutUs/AboutUs';
import AboutTeam from './components/AboutTeam/AboutTeam';
// Importing Bootstrap CSS for styling
// Footer to be added later
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1A73E9',
    },
    secondary: {
      main: '#8B5000',
    },
    background: {
      default: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: [
      'Noto Sans Devanagari',
      'Inter',
      'sans-serif',
    ].join(','),
  },
  spacing: 8,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app-bg">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <CarouselSection />
                <NoticeNewsCards />
                <Map />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/members" element={<AboutTeam />} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
