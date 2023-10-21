import React from 'react';
import Item from './Item';

function ItemList({ productos }) {
  return (
    <div className="item-list">
      {productos.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;