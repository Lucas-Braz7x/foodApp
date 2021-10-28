import React from 'react';
import style from './styles.module.scss';

export const MealsItem = (props) => {
  const price = `R$ ${props.price.toFixed(2)}`
  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div></div>
    </li>
  )
}