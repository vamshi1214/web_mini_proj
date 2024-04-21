import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details: ', error));
  }, [productId]);

  return (
    <div>
      <h1>Product Page</h1>
      <div class='rbord-pro'> 
      <div className='product-page'>
        {product && (
          <>
            <img src={product.image} alt={product.title} className='product-image' />
            <div className='product-details'>
              <h2 className='product-title'>{product.title}</h2>
              <p className='product-price'>${product.price}</p>
              <p className='product-description'>{product.description}</p>
              <p className='product-rating'>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
}

export default ProductDetail;
