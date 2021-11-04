import React from 'react';
import style from './styles.module.scss';

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <li className={style.cartItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={style.summary}>
          <span className={style.price}>{price}</span>
          <span className={style.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={style.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
