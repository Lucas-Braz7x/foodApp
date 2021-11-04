import React, { useReducer } from 'react'
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    //Atualiza o valor total 
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    //Verifica se o elemento existe no carrinho
    const existingCartItemIndex = state.items.findIndex((item) => (
      item.id === action.item.id
    ));

    //Pega esse elemento se ele existir
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      //Se o elemento existe atualiza quantidade no carrinho e valor total
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {//Senão põe no carrinho 
      updatedItems = state.items.concat(action.item);
    }

    return {//Retorna o item e o valor total
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    console.log("entrou aqui")
    //Verifica se o elemento existe no carrinho
    const existingCartItemIndex = state.items.findIndex((item) => (
      item.id === action.id
    ));

    //Pega esse elemento se ele existir
    const existingCartItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => (
        item.id !== action.id
      ));
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD', item: item })
  };
  const removeItemToCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;