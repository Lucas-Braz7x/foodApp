import React from 'react';
import CartIcon from '../../Cart/CartIcon';
import style from './styles.module.scss';

export const CartButton = (props) => {
  return (
    <button className={`${style.button} ${style.bump}`}>
      <span className={style.icon}><CartIcon /></span>
      <span>Seu carrinho</span>
      <span className={style.badge}>3</span>
    </button>
  );
};