import React, { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
   
    fetch('productos.json')  
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error);
  }, []);
  
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ul>
        {products.length > 0 ? (
          products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))
        ) : (
          <p>Cargando productos...</p>
        )}
      </ul>
    </div>
  );
};

export default ItemListContainer;
