import React from 'react';
import style from './styles.module.scss';

const Card = (props) => {
  return (
    <div className={style.card}>{props.children}</div>
  );
}

export default Card;