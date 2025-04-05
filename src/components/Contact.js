import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    favDestination: '',
    message: '' 
  });
  const [profilePic, setProfilePic] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedData = {
      name: localStorage.getItem('name') || '',
      email: localStorage.getItem('email') || '',
      favDestination: localStorage.getItem('favDestination') || '',
    };
    setFormData(prev => ({ ...prev, ...savedData }));
    const savedPic = localStorage.getItem('profilePicture');
    if (savedPic) setProfilePic(savedPic);
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name !== 'message') {
      localStorage.setItem(name, value);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setProfilePic(imageUrl);
        localStorage.setItem('profilePicture', imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProfilePic = () => {
    setProfilePic(null);
    localStorage.removeItem('profilePicture');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Prepare the data to send
      const submissionData = {
        ...formData,
        profilePic: profilePic || null,
        createdAt: new Date().toISOString()
      };

      // Send to your backend API
      const response = await axios.post(
        process.env.REACT_APP_API_URL || 'http://localhost:5000/api/contact', 
        submissionData
      );

      console.log('Submission successful:', response.data);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.response?.data?.error || 'Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const formStyle = {
    backgroundColor: '#f4f4f4',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    width: '50%',
  };

  const inputStyle = {
    width: '80%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  if (submitted) {
    return (
      <main>
        <section style={formStyle}>
          <h2>Thank You!</h2>
          <p>Your message has been submitted successfully.</p>
          <p>We'll get back to you soon.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section style={formStyle}>
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Fill out the form below.</p>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            style={inputStyle} 
            required 
          />
          <br /><br />
          
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            style={inputStyle} 
            required 
          />
          <br /><br />
          
          <label>Favorite Destination:</label>
          <input
            type="text"
            name="favDestination"
            value={formData.favDestination}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your favorite place"
          />
          <br /><br />
          
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyle, height: '100px' }}
            required
          />
          <br /><br />
          
          <label>Upload Profile Picture:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <br /><br />
          
          {profilePic && (
            <>
              <img src={profilePic} alt="Profile preview" style={{ maxWidth: '150px', borderRadius: '50%' }} />
              <br />
              <button 
                type="button" 
                onClick={removeProfilePic} 
                style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px' }}
              >
                Remove Picture
              </button>
              <br /><br />
            </>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            style={{ 
              backgroundColor: isLoading ? '#95a5a6' : '#3498db', 
              color: 'white', 
              border: 'none', 
              padding: '10px', 
              width: '50%', 
              borderRadius: '5px',
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;