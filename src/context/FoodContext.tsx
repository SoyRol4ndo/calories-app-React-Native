import {createContext} from 'react';
import {Food, FoodState} from '../interfaces/interfaces';

export type FoodContextProps = {
  foodState: FoodState;
  AddFood: (food: Food) => void;
  AddFoodToday: (foodToday: Food) => void;
  RemoveFoodToday: (id: number) => void;
};

export const FoodContext = createContext<FoodContextProps>(
  {} as FoodContextProps,
);
