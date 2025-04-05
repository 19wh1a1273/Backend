import React, { useState, useEffect } from 'react';
import { fetchDestinations } from '../data';

function Home() {
  const [featuredDestination, setFeaturedDestination] = useState(null);

  useEffect(() => {
    const getFeaturedDestination = async () => {
      const destinations = await fetchDestinations();
      const randomIndex = Math.floor(Math.random() * destinations.length);
      setFeaturedDestination(destinations[randomIndex]);
    };
    getFeaturedDestination();
  }, []);

  const heroStyle = {
    background: "url('https://media.cnn.com/api/v1/images/stellar/prod/191206180458-u114-auckland-city-new-zealand-chris-mclennan.jpg?q=w_1110,c_fill/f_webp') no-repeat center/cover",
    color: 'white',
    padding: '100px 20px',
    textAlign: 'center',
  };

  const featuresStyle = {
    backgroundColor: '#f4f4f4',
    padding: '40px',
    textAlign: 'center',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const featuredStyle = {
    padding: '40px',
    backgroundColor: '#e7f2fa',
    borderRadius: '10px',
    margin: '20px 0',
  };

  return (
    <main>
      <section style={heroStyle} className="hero">
        <h2>Your Adventure Starts Here</h2>
        <p>Discover the best places to visit and plan your dream trip!</p>
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/191206180458-u114-auckland-city-new-zealand-chris-mclennan.jpg?q=w_1110,c_fill/f_webp"
          alt="A beautiful travel destination"
          style={{ width: '100%', maxWidth: '600px', marginTop: '20px', borderRadius: '10px' }}
        />
      </section>
      {featuredDestination && (
        <section style={featuredStyle}>
          <h2>Featured Destination</h2>
          <h3>{featuredDestination.name}</h3>
          <img src={featuredDestination.img} alt={featuredDestination.name} style={{ maxWidth: '300px', borderRadius: '10px' }} />
          <p>Famous for {featuredDestination.landmark}</p>
          <p>Best time to visit: {featuredDestination.bestTime}</p>
        </section>
      )}
      <section id="features" style={featuresStyle}>
        <h2>Features of Our Travel Guide</h2>
        <ul style={listStyle}>
          <li>Explore popular travel destinations</li>
          <li>Get tips for safe and enjoyable trips</li>
          <li>Plan itineraries based on your interests</li>
          <li>Contact us for personalized travel assistance</li>
          <li>Find accommodation, restaurants, and activities</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;