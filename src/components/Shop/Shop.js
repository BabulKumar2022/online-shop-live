import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

 
const Shop = () => {

     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([]);
    //  const [clearCad, setClearCad] = useState(0)

     useEffect(() =>{
         fetch('data.json')
         .then(res => res.json())
         .then(data => setProducts(data));
     }, [])
     const handleAddToCart = (product) =>{
        // console.log(product)
        
        const newCart =[...cart, product];
        setCart(newCart);
    }
           

    return (
        <div className='shop-container'>
           
            <div className="products-container">
                {
                    products.map(product=><Product
                         key={product.id}
                         product={product}
                         handleAddToCart={handleAddToCart}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected Summary</h2>
                <div className="selected-container">
                    {
                        cart.map((item) =>(<h4 key={item.id}>
                            {item.name}
                            </h4> ))
                    }
                </div>
               
                <div className="btn-container">
                    <button >Random Select One</button>
                    <button >Reset</button>
                </div>
                <div className="selected-item">
                    <h3></h3>
                </div>
            </div>

        </div>
    );
};

export default Shop;