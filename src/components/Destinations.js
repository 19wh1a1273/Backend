import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDestinations } from '../data';

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const data = await fetchDestinations();
        setDestinations(data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      } finally {
        setLoading(false);
      }
    };
    loadDestinations();
  }, []);

  const sectionStyle = {
    backgroundColor: 'rgba(244, 244, 244, 0.9)',
    padding: '20px',
    borderRadius: '10px',
  };

  const itemStyle = {
    margin: '20px 0',
  };

  const tableStyle = {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'center',
  };

  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: '#3498db',
    color: 'white',
  };

  if (loading) return <p>Loading destinations...</p>;

  return (
    <main>
      <section style={sectionStyle}>
        <h2>Popular Destinations</h2>
        <p>Discover some of the best travel destinations:</p>
        {destinations.map(({ id, name, img, landmark }) => (
          <div key={id} style={itemStyle}>
            <img src={img} alt={name} style={{ maxWidth: '300px', borderRadius: '10px' }} />
            <h3>{name}</h3>
            <p>Famous for {landmark}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Destination Details</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Destination</th>
              <th style={headerCellStyle}>Famous Landmark</th>
              <th style={headerCellStyle}>Best Time to Visit</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map(({ id, name, landmark, bestTime }) => (
              <tr key={id}>
                <td style={cellStyle}>{name}</td>
                <td style={cellStyle}>{landmark}</td>
                <td style={cellStyle}>{bestTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p><Link to="/">Back to Home</Link></p>
      </section>
    </main>
  );
}

export default Destinations;