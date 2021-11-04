import style from './styles.module.scss';
import React, { useContext } from 'react';
import Modal from '../UI/Modal';

import CartContext from '../../store/cart-context'
import CartItem from './CartItem';

export const Cart = (props) => {
  //Importando contexto
  const cartCtx = useContext(CartContext);

  //Fixando casas decimais
  const totalAmount = `R$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;//Retorna um boolean

  //Criando função para remover elemento
  const handleCartItemRemove = (id) => {
    cartCtx.removeItem(id);
  }

  const handleCartItemAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const cartItems = (
    <ul className={style.cartItems}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={handleCartItemRemove.bind(null, item.id)}
          onAdd={handleCartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  )

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={style.total}>
        <span>Quantia total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style['button-alt']} onClick={props.onHideCart}>Fechar</button>
        {hasItems && <button className={style.order}>Pedido</button>}
      </div>
    </Modal>
  )
}