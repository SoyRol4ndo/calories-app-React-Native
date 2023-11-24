import {sumeCaloriesToday} from '../helpers/sumeCaloriesToday';
import {Food} from '../interfaces/interfaces';
import {Alert} from 'react-native';

interface Props {
  foodsToday: Food[];
  food: Food;
  AddFoodToday: (foodToday: Food) => void;
}

export const useCalculateCalories = ({
  foodsToday,
  food,
  AddFoodToday,
}: Props) => {
  if (sumeCaloriesToday({foodsToday}) < 2000) {
    Alert.alert('Comida agregada exitosamente...');
    const id = new Date().getTime();
    AddFoodToday({...food, id});
    return;
  } else {
    Alert.alert('Ha llegado al limite de calorias..');
  }
};
