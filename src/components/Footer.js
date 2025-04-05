import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    marginTop: '20px',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Travel Guide. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;