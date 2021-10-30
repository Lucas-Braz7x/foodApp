import React, { useRef, useState } from 'react';
import { Input } from '../UI';
import style from './styles.module.scss';

export const MealsForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    console.log(enteredAmount)
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  }
  return (
    <form action="" className={style.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantidade"
        input={{
          id: 'Amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }} />
      <button>+ Adicionar</button>
      {!amountIsValid && <p>Por favor, entre com uma quanti válida (1-5)</p>}
    </form>
  )
}