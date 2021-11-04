import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/cart-context';
import style from './styles.module.scss';

export const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const btnClasses = `${style.button} ${btnIsHighlighted ? style.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }

  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
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