import {useReducer} from 'react';
import {Food, FoodState} from '../interfaces/interfaces';
import {FoodContext} from './FoodContext';
import {FoodReducer} from './FoodReducer';

const INITIAL_STATE: FoodState = {
  foods: [
    {nombre: 'Pizza', calories: 200, porcion: 100, id: 1},
    {nombre: 'Queso', calories: 200, porcion: 100, id: 2},
    {nombre: 'Arroz', calories: 200, porcion: 100, id: 3},
    {nombre: 'Sopa', calories: 200, porcion: 100, id: 4},
    {nombre: 'Fruta', calories: 200, porcion: 100, id: 5},
    {nombre: 'Leche', calories: 200, porcion: 100, id: 6},
    {nombre: 'Pan', calories: 200, porcion: 100, id: 7},
    {nombre: 'Cerveza', calories: 200, porcion: 100, id: 8},
    {nombre: 'Jugo', calories: 200, porcion: 100, id: 9},
    {nombre: 'Salchicha', calories: 200, porcion: 100, id: 10},
    {nombre: 'Mortadella', calories: 200, porcion: 100, id: 11},
  ],
  foodsToday: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const FoodProvider = ({children}: Props) => {
  const [foodState, dispatch] = useReducer(FoodReducer, INITIAL_STATE);

  const AddFood = (food: Food) => {
    dispatch({type: 'addFood', payload: food});
  };

  const AddFoodToday = (foodToday: Food) => {
    dispatch({type: 'addFoodToday', payload: foodToday});
  };

  const RemoveFoodToday = (id: number) => {
    dispatch({type: 'removeFood', payload: {id}});
  };

  return (
    <FoodContext.Provider
      value={{foodState, AddFood, AddFoodToday, RemoveFoodToday}}>
      {children}
    </FoodContext.Provider>
  );
};
