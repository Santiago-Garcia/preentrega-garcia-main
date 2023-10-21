import React, { useState } from 'react';
import ItemCount from './ItemCount';


function ItemDetail({ product }) {
  const [count, setCount] = useState(1);

  const onAdd = (count) => {
    console.log(`Agregado al carrito: ${count} unidades de ${product.name}`);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default ItemDetail;