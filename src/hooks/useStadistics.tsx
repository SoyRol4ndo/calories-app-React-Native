import React, {useState} from 'react';
import {Food, TodayCaloriesProps} from '../interfaces/interfaces';

interface Props {
  foodsToday: Food[];
}

export const useStadistics = ({foodsToday}: Props) => {
  const caloriesConsumed = foodsToday.reduce(
    (acum, curr) => acum + curr.calories,
    0,
  );

  const remainigCalories = 2000 - caloriesConsumed;
  const porcentaje = caloriesConsumed / 20;

  const todayStadistics = {
    consumed: caloriesConsumed,
    porcentaje,
    remaining: remainigCalories,
  };

  return todayStadistics;
};
