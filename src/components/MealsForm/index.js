import React from 'react';
import { Input } from '../UI';
import style from './styles.module.scss';

export const MealsForm = (props) => {
  console.log(props.id)
  return (
    <form action="" className={style.form}>
      <Input label="Quantidade" input={{
        id: 'Amount' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button>+ Adicionar</button>
    </form>
  )
}