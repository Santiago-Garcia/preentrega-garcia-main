import React from 'react';

function CartWidget() {
  const itemCount = 5;

  return (
    <div className="cart-widget">
      <i className="fa fa-shopping-cart"></i>
      <span className="badge badge-pill badge-primary">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
