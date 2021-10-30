import React, { useContext } from 'react';
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/cart-context';
import style from './styles.module.scss';

export const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <button className={`${style.button} ${style.bump}`} onClick={props.onClick}>
      <span className={style.icon}><CartIcon /></span>
      <span>Seu carrinho</span>
      <span className={style.badge}>
        {cartCtx.items.reduce((curNumber, item) => {
          return curNumber + item.amount;
        }, 0)}
      </span>
    </button>
  );
};