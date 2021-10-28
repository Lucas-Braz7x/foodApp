import React from 'react';
import style from './styles.module.scss';

export const MealsSummary = () => {
  return (
    <section className={style.summary}>
      <h2>Comida deliciosa, feita exclusivamente para você!</h2>
      <p>Escolha a sua comida favorita para qualquer refeição do dia</p>
      <p>
        Todos os nossos pratos são preparado com ingredientes de alta qualidade
        e com muito carinho para você!
      </p>
    </section>
  );
};