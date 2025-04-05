import React, { useState } from 'react';
import { tipsData } from '../data';

function TravelTips() {
  const [randomTip, setRandomTip] = useState('');

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tipsData.length);
    setRandomTip(tipsData[randomIndex]);
  };

  const sectionStyle = {
    backgroundColor: '#f4f4f4',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const itemStyle = {
    background: '#e7f2fa',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <main>
      <section style={sectionStyle}>
        <h2>Essential Travel Tips for a Smooth Journey</h2>
        <ul style={listStyle}>
          {tipsData.map((tip, index) => (
            <li key={index} style={itemStyle}>{tip}</li>
          ))}
        </ul>
        <button onClick={getRandomTip}>Get Random Tip</button>
        {randomTip && <p id="randomTip">{randomTip}</p>}
        <img
          src="https://nayosmart.com/cdn/shop/articles/Essential_Tips_to_Know_Before_Traveling_Abroad.jpg?v=1563787503&width=800"
          alt="Travel essentials and tips"
          style={{ width: '100%', maxWidth: '500px', borderRadius: '10px', marginTop: '20px' }}
        />
      </section>
    </main>
  );
}

export default TravelTips;