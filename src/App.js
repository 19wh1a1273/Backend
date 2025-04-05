import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import TravelTips from './components/TravelTips';
import Destinations from './components/Destinations';
import Itinerary from './components/Itinerary';
import Contact from './components/Contact';

function App() {
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    const savedItinerary = JSON.parse(localStorage.getItem('itinerary') || '[]');
    setItinerary(savedItinerary);
  }, []);

  const updateItinerary = (newItinerary) => {
    setItinerary(newItinerary);
    localStorage.setItem('itinerary', JSON.stringify(newItinerary));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tips" element={<TravelTips />} />
          <Route path="/itinerary" element={<Itinerary itinerary={itinerary} updateItinerary={updateItinerary} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;