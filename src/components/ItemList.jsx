import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <Link to={`/item/${item.id}`}>Ver Detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
