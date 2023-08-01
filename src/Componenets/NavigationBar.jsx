// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import '../style/NavigationBar.css'; 

// function Navigation() {
//   return (
//     <>
//       <Navbar expand="lg" className="custom-navbar">
//         <Container fluid>
//           <Navbar.Brand className="fw-bold fs-4" href="#home">
//             <i className="fa-solid fa-store"></i>Baazar Of Pakistan
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//               <Link to="/products" className="nav-link">
//                 Product
//               </Link>
//               {/* <Link to="/ContactForm" className="nav-link">
//                 About
//               </Link> */}
//               {/* <Link to="/login" className="nav-link">
//                 Login
//               </Link> */}
//             </Nav>
//             <Form className="d-flex">
//               <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//             <div className="button-group py-2">
//               <Button className="mx-2" variant="outline-secondary">
//                 <Link to="/Signup" className="nav-link">
//                   Sign Up
//                 </Link>
//               </Button>

//               <Button className="mx-2" variant="outline-secondary">
//                 <Link to="/login" className="nav-link">
//                   Log in
//                 </Link>
//               </Button>

//               {/* <Button className="mx-2" variant="outline-secondary">
//                 <Link to="/login" className="nav-link">
//                   <i className="fa-solid fa-cart-shopping"></i>
//                 </Link>
//               </Button> */}
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Navigation;

import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import Cart from './Cart';
import { FaHome, FaShoppingCart, FaInfoCircle, FaEnvelope, FaUser } from 'react-icons/fa';



export default function Navigation() {
  return (
<>
<Navbar expand="lg" className="custom-navbar fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">Baazar Of Pakistan</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

<Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
  <Link to="/" className='text-decoration-none text-dark mx-3'><FaHome className='mx-1'/>Home</Link>
  <Link to="/products" className='text-decoration-none text-dark mx-3'><FaShoppingCart className='mx-1'/>Products</Link>
  <Link to="/about" className='text-decoration-none text-dark mx-3'><FaInfoCircle className='mx-1'/>About</Link>
  <Link to="/contact" className='text-decoration-none text-dark mx-3'><FaEnvelope className='mx-1'/>Contact </Link>
  <Link to="/signin" className='text-decoration-none text-dark mx-3'><FaUser className='mx-1'/>Sign In/Sign Up</Link>
</Nav>

{/* cart icon  */}
       <Cart />

{/* search icon  */}

    <div className="d-flex align-items-center">
   
              <form className="search mx-3">
                <input type="text" placeholder="Search" className="search__input" />
                <button type="button" className="search__button">
                  <AiOutlineSearch />
                </button>
              </form>
              </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  )
}

