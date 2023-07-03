import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import '../style/ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const formAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-50px)' },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the payload object with the form data
    const payload = {
      name,
      email,
      message,
    };

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post('https://www.fakeshop-api.com/contact', payload);
      console.log('Form submission successful');
      console.log('Response:', response.data);

      // Reset the form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <animated.div style={formAnimation} className="contactform-page">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="form-heading">Contact With Us</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </animated.div>
  );
};

export default ContactForm;
