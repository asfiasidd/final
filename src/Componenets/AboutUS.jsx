// import React from 'react';

// function AboutUs() {
//   const aboutStyle = {
//     backgroundColor: '#91194b',
//     width: '1200px',
//     padding: '20px',
//     color: 'white',
//     borderRadius: '8px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     textAlign: 'center',
//     margin: '20px auto',
//     marginBottom: '0px',
//   };

//   return (
//     <div className="about-us" style={aboutStyle}>
//       <div className="container">
//         <h2>Welcome to Baazar Of Pakistan!</h2>
//         <p>
//           At Baazar Of Pakistan, we take pride in offering you a wide range of products that showcase the rich cultural heritage and craftsmanship of Pakistan. From traditional clothing and accessories to exquisite handicrafts and home decor, we bring you the best of Pakistani products right at your fingertips.
//         </p>
//         <p>
//           Explore our extensive collection of vibrant and elegant clothing, including stunning embroidered fabrics, intricate handwoven textiles, and stylish contemporary designs. Whether you're looking for a traditional outfit for a special occasion or trendy everyday wear, we have something to suit every taste and style.
//         </p>
//         <p>
//           Indulge in the artistry of Pakistani handicrafts with our carefully curated selection of exquisite items. Discover beautifully handcrafted pottery, intricate woodwork, delicate ceramics, and mesmerizing embroidery that reflect the skill and creativity of Pakistani artisans. Each piece tells a story and adds a touch of elegance to your living spaces.
//         </p>
//         <p>
//           At Baazar Of Pakistan, we are committed to providing you with a seamless shopping experience. Our user-friendly website allows you to browse through different categories, compare products, and make secure purchases with just a few clicks. We also ensure prompt delivery and excellent customer service to make your shopping experience truly satisfying.
//         </p>
//         <p>
//           Join us in celebrating the vibrant colors, rich traditions, and exceptional craftsmanship of Pakistan. Let Baazar Of Pakistan be your gateway to authentic Pakistani products that bring beauty, culture, and elegance into your life.
//         </p>
//         <p>Start exploring and immerse yourself in the beauty of Baazar Of Pakistan!</p>
//       </div>

//       <img
//         className="d-block w-100"
//         src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
//         alt="Third slide"
//         style={{ height: '350px' }}
//       />
//     </div>
//   );
// }

// export default AboutUs;

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {MdLibraryBooks} from 'react-icons/md'
import {GoEye} from 'react-icons/go'
import {RiSearchEyeLine} from 'react-icons/ri'
export default function About() {
  return (
    <>
      <div className="about-background">
        <h1 className="about-heading fw-bold text-center fs-1 fs-sm-2 fs-md-3">About us</h1>
      </div>

{/* accordions */}

      <div className='accordion-container'>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Accordion Item #4</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>\

      <div className="your-container">
    <div className="your-card">
      <h2 className="your-card-heading">Mission</h2>
      <i><MdLibraryBooks></MdLibraryBooks></i>
      <p className="your-card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum interdum nulla, ac varius quam lobortis a.</p>
    </div>

    <div className="your-card">
      <h2 className="your-card-heading">Vision</h2>
      <i><GoEye></GoEye></i>
      <p className="your-card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum interdum nulla, ac varius quam lobortis a.</p>
    </div>

    <div className="your-card">
      <h2 className="your-card-heading">Objective</h2>
      <i><RiSearchEyeLine></RiSearchEyeLine></i>
      <p className="your-card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum interdum nulla, ac varius quam lobortis a.</p>
    </div>
  </div>
    </>
  );
}

