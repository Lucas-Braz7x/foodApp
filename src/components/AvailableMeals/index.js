import React from 'react';
import style from './styles.module.scss';
import { Card } from '../UI';
import { MealsItem } from '../MealsItem';


export const AvailableMeals = ({ mealsList }) => {
  console.log(mealsList)
  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {mealsList.map(meal => <MealsItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price} />)}
        </ul>
      </Card>
    </section>
  );
};