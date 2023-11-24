import React from 'react';
import {Food} from '../interfaces/interfaces';

interface Props {
  foodsToday: Food[];
}

export const sumeCaloriesToday = ({foodsToday}: Props) => {
  const caloriesConsumed = foodsToday.reduce(
    (acum, curr) => acum + curr.calories,
    0,
  );

  return caloriesConsumed;
};
