import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem"
import { connect } from 'react-redux'


const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    
      let items = 0
      let price = 0
      cart.forEach((item) => {
        items += item.qty
        price += item.qty * item.price
      })
  setTotalPrice(price)
  setTotalItems(items)
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
  return (
    <div className="Cart-main">
      <div className="Cart-inside">
      {cart.map((item)=>{
        return(
            <CartItem key={item.id} itemData={item} /> //pass in it as props
            )}
      )}
      </div>
      <div className="Cart-first">
        <div>

        <h3>Cart Summary</h3>
        <div>

        <span>
         total items: {totalItems} 
         </span>
         <br/>
         <span type="number">
         price: {totalPrice} $
         </span>
         <br/>
        <button className="btn-btn">Proceed to checkout</button>
        </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
      cart:state.shopReducer.cart
    } 
}

export default connect(mapStateToProps)(Cart);
