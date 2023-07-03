import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

function FooterSection() {
  return (
  <>
    <footer className='mt-1' style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={25} style={{ color: 'orange' }} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={25} style={{ color: 'orange', marginLeft: '10px' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} style={{ color: 'orange', marginLeft: '10px' }} />
          </a>
          <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={25} style={{ color: 'orange', marginLeft: '10px' }} />
          </a>
        </div>
      </div>
    </footer>
  



<div className='bg-dark fs-5 fw-bold text-center text-white py-2'>All the Rights Reserved</div>
  </>
    
  )
}

export default FooterSection