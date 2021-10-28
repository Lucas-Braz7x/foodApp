import style from './styles.module.scss';
import React from 'react';
import Modal from '../UI/Modal';

export const Cart = (props) => {
  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={style.total}>
        <span>Quantia total</span>
        <span>35.62</span>
      </div>
      <div className={style.actions}>
        <button className={style['button-alt']} onClick={props.onHideCart}>Fechar</button>
        <button className={style.order}>Pedido</button>
      </div>
    </Modal>
  )
}