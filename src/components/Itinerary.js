import React, { useState, useEffect } from 'react';
import { fetchDestinations } from '../data';

function Itinerary({ itinerary, updateItinerary }) {
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

  const handleDragStart = (e, destination) => {
    e.dataTransfer.setData('text', destination.name);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const itemText = e.dataTransfer.getData('text');
    if (!itinerary.includes(itemText)) {
      const updatedItinerary = [...itinerary, itemText];
      updateItinerary(updatedItinerary);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const removeItem = (item) => {
    const updatedItinerary = itinerary.filter((i) => i !== item);
    updateItinerary(updatedItinerary);
  };

  const listStyle = {
    listStyle: 'none',
    padding: '10px',
    background: '#dfe6e9',
    minHeight: '100px',
  };

  const itemStyle = {
    background: '#f4f4f4',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  if (loading) return <p>Loading destinations...</p>;

  return (
    <main>
      <h2>Drag destinations into your itinerary</h2>
      <ul>
        {destinations.map((dest) => (
          <li
            key={dest.id}
            draggable
            onDragStart={(e) => handleDragStart(e, dest)}
            style={itemStyle}
          >
            {dest.name}
          </li>
        ))}
      </ul>
      <h2>Your Itinerary</h2>
      <ul style={listStyle} onDrop={handleDrop} onDragOver={handleDragOver}>
        {itinerary.map((item, index) => (
          <li key={index} style={itemStyle}>
            {item}
            <button
              onClick={() => removeItem(item)}
              style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Itinerary;