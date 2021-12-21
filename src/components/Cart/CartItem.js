import {useState} from 'react'
import React from "react";
import "./CartItem.css";

import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../../redux/Shopping/shopping-actions";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {

  const [input, setInput] = useState(itemData.qty)
  
 const  onChangeHandler = (e) => {
   setInput(e.target.value)
   adjustQty(itemData.id, e.target.value )
  //  console.log(e.target.value);
 }
  return (
    <div className="cart-item">
      <img
        className="cart-item-image"
        src={itemData.image}
        alt={itemData.tile}
      />
      <div className="details">
        <p className="item_title">{itemData.tile}</p>
        <p className=" ">{itemData.description}</p>
        <p className="item_price">{itemData.price}</p>
      </div>
      <hr />
      <div>
        <div>
          <label htmlFor="qty">Qty</label>
          <input
            className="show-qty"
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={itemData.qty}
            onChange ={onChangeHandler}
          />
        </div>
        <button onClick={() => removeFromCart(itemData.id)} className="btn-qty">
         <img src="" alt="YO" />
        </button>
        <hr />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
