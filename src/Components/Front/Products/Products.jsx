import React from 'react';
import './Products.css';

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className='products'>
      {productItems.map(productItem => (
        <div className='card' key={productItem.id}>
          <div className='card-content'>
            <div className='image-container'>
              <div className='image-box'>
                <img className='product-image' src={productItem.image} alt={productItem.name} />
              </div>
            </div>

            <div>
              <h3 className='product-name'>{productItem.name}</h3>
              <h3 className='product-price'>{productItem.price}</h3>
              <h4 className='product-description'>{productItem.description}</h4>
            </div>
          </div>

          <div className='card-actions'>
            <button className='add-button' onClick={() => handleAddProduct(productItem)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
