import React, { useContext } from 'react';
import { MealsForm } from '../MealsForm';
import style from './styles.module.scss';
import CartContext from '../../store/cart-context';

export const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `R$ ${props.price.toFixed(2)}`;

  const handleAddToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealsForm onAddToCart={handleAddToCart} id={props.id} />
      </div>
    </li>
  )
}