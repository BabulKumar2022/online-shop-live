import React from 'react';
import './Product.css'
const Product = (props) => {
    const {product, handleAddToCart} = props
    // console.log(props)
    // const {handleAddToCart} = props;
    const {name, img, price} = props.product;
    
    
    return (
        <div className='product'>
           <img src={img} alt=""></img>
           <div className="product-info">
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>Storage:</p>
           </div>
           <button onClick={ () => handleAddToCart(product)} className='cart-btn'>
               <p>Add to Cart</p> 
            </button>
        </div>
    );
};

export default Product;