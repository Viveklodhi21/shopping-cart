import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import {connect} from 'react-redux'
import {addToCart, loadCurrentItem} from '../../../redux/Shopping/shopping-actions'

const Product = ({ productData, addToCart, loadCurrentItem }) => {
  return (
    <div className="products">
      <img className="productsimg" src={productData.image} alt={productData.title} />
      <div className="product-main">
        <p>{productData.title}</p>
        <p>
           {productData.description}
        </p>
        <p>$ {productData.price}</p>

        <div className="product-main-right">
          <Link to= {`/product/${productData.id}`}>
            <button onClick={() => {loadCurrentItem(productData)}}className="btn-cart">View More</button>
          </Link>

          <button className="btn-cart" onClick={()=> addToCart(productData.id)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem:(item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Product);
