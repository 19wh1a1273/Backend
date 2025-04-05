import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Explore the World</h1>
      <nav>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/destinations" className={styles.link}>Destinations</Link>
        <Link to="/tips" className={styles.link}>Travel Tips</Link>
        <Link to="/itinerary" className={styles.link}>Itineraries</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
        <a
          href="https://www.lonelyplanet.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          External Travel Guide
        </a>
      </nav>
    </header>
  );
}

export default Header;