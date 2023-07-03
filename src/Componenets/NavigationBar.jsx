import React from 'react';
import { Link } from 'react-router-dom';
import { LiaShopware } from 'react-icons/lia';
import '../style/NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="custom-navbar">
      <Link className="navbar-brand" to="/products">
        <LiaShopware className="navbar-icon" />
        <span className="navbar-brand-text">Baazar Of Novels</span>
      </Link>

      <div className="navbar-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/products">
          Products
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link" to="/signup">
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
