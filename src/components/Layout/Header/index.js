import React from 'react';
import style from './styles.module.scss';
import 'animate.css';
import mealsImg from '../../../assets/meals-small.jpg';
import { CartButton } from '../CartButton';

export const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.title}>FoodApp</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={style.mainImage}>
        <img src={mealsImg} alt="Uma mesa de jantar cheia de comida" />
      </div>
    </>
  );
};