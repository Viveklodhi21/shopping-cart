import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { connect } from "react-redux";
import axios from 'axios'

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
 
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <div className="Navbar">
      <Link to="/">
        <h2 className="Navbar-1">Redux Shopping App</h2>
      </Link>
     
      <Link to="/cart">
        <div className="Navbar-2">
          <h3 className="cart-title">Cart</h3>
          <img src="" alt="O" />
          <div className="Counter">{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shopReducer.cart,
  };
  
};

export default connect(mapStateToProps)(Navbar);
