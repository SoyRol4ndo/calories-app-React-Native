import {Food, FoodState} from '../interfaces/interfaces';

type FoodAction =
  | {type: 'addFood'; payload: Food}
  | {type: 'addFoodToday'; payload: Food}
  | {type: 'removeFood'; payload: {id: number}};

export const FoodReducer = (
  state: FoodState,
  action: FoodAction,
): FoodState => {
  switch (action.type) {
    case 'addFood':
      return {
        ...state,
        foods: [...state.foods, action.payload],
      };
    case 'addFoodToday':
      return {
        ...state,
        foodsToday: [...state.foodsToday, action.payload],
      };

    case 'removeFood':
      return {
        ...state,
        foodsToday: state.foodsToday.filter(food => {
          return food.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
};
