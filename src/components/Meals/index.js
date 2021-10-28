import React from 'react';
import { AvailableMeals } from '../AvailableMeals';
import { MealsSummary } from '../MealsSummary';

export const Meals = ({ mealsList }) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals mealsList={mealsList} />
    </>
  )
}