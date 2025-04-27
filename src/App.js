// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import CarouselSection from './components/CarouselSection/CarouselSection';
import NoticeNewsCards from './components/NoticeNewsCards/NoticeCards';
import Footer from './components/Footer/Footer'; // Footer component
import Map from './components/Map/map'; // Map component
// Importing Bootstrap CSS for styling
// Footer to be added later
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';

function App() {
  return (
    <div className="app-bg">
      <Navbar />
      <HeroSection />
      <CarouselSection />
      <NoticeNewsCards />
      <Map />
      <Footer />
      {/* Add other components here */}
      <main>
      </main>
      {/* Footer will be added later */}
    </div>

  );
}

export default App;
