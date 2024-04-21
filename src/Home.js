import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleProducts] = useState(6);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Store App</h1>
      <div class='rbord'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search for products titles ...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='grid product-grid'>
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className='product-card'>
            <div>
              <img src={product.image} alt={product.title} className='product-image-home' />
              <div class='product-details-home'>
                <p class='product-title-home'>{product.title}</p>
                <p class='product-price-home'>${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
