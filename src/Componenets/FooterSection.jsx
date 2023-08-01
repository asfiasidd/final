// import React from 'react'
// import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

// function FooterSection() {
//   return (
//   <>
//     <footer className='mt-1' style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <div>
//           <h3>Contact Us</h3>
//           <p>Email: contact@example.com</p>
//         </div>
//         <div style={{ marginLeft: '20px' }}>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter size={25} style={{ color: 'orange' }} />
//           </a>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook size={25} style={{ color: 'orange', marginLeft: '10px' }} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram size={25} style={{ color: 'orange', marginLeft: '10px' }} />
//           </a>
//           <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer">
//             <FaEnvelope size={25} style={{ color: 'orange', marginLeft: '10px' }} />
//           </a>
//         </div>
//       </div>
//     </footer>
  



// <div className='bg-dark fs-5 fw-bold text-center text-white py-2'>All the Rights Reserved</div>
//   </>
    
//   )
// }

// export default FooterSection

import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
export default function Footer() {
  return (
 <>
 {/* footer  */}

 <footer className="footer" style={{ backgroundColor: "rgb(219, 170, 219)", marginTop: "50px" }}>
        <div className="footer__container">
          <div className="footer__top">
            <div className="company__info">
              <h2 className="company__logo">Baazar Of Pakistan</h2>
              <p className="company__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure.
                Harum, animi dolores, nam, ad magni expedita.
              </p>
              <h2>Contact us</h2>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="https://www.linkedin.com/in/syedaumaima/" className="footer__list-link">
                    <i className="icon icon--linkedin"><BsLinkedin /></i>
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="https://www.instagram.com/writerumaimafarooq/" className="footer__list-link ">
                    <i className="icon icon--instagram"><BsInstagram /></i>

                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="https://github.com/syedaumaima" className="footer__list-link">
                    <i className="icon icon--github"><AiFillGithub /></i>
                  </a>
                </li>

                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--whatsapp"><BsWhatsapp /></i>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="footer__title"> Store</h6>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Home
                  </a>
                </li>
                <li className="footer__list-item">
            <a href="/products" className="footer__list-link">
            Products
            </a>
          </li>
                <li className="footer__list-item">
                  <a href="/about" className="footer__list-link">
                    About
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="/contact" className="footer__list-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="form-group mb-4">
              <input type="email" className="form-control bg-transparent" placeholder="Enter Your Email here" />
              <button className="mt-3 btn-style">Submit</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid copyright-section">
        <p className="p-0">
          copyright @ 2023 Baazar Of Pakistan All Rights Reserved <span className="gap"></span>CEO Umaima Farooq
        </p>
      </div>
 </>
  )
}