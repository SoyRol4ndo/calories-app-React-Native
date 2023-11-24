import {useContext} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {FoodContext} from '../context/FoodContext';
import {Food} from '../interfaces/interfaces';
import {Button} from '@rneui/themed';
import {paletaColors} from '../theme/colors';

import Icon from 'react-native-vector-icons/Ionicons';
import {sumeCaloriesToday} from '../helpers/sumeCaloriesToday';
import {useCalculateCalories} from '../hooks/useCalculateCalories';

interface Props {
  food: Food;
  isAbleToAdd: boolean;
}

export const MealItem = ({food, isAbleToAdd}: Props) => {
  const {
    foodState: {foodsToday},
    AddFoodToday,
    RemoveFoodToday,
  } = useContext(FoodContext);
  const handleIconPress = (food: Food) => {
    if (isAbleToAdd) {
      useCalculateCalories({foodsToday, food, AddFoodToday});
    } else {
      RemoveFoodToday(food.id);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{food.nombre}</Text>
        <Text style={styles.portion}>{food.porcion} gr</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.calories}>{food.calories} Kcal</Text>
        <Button
          type="clear"
          icon={
            <Icon
              name={isAbleToAdd ? 'add-circle-outline' : 'close'}
              size={30}
              color="white"
            />
          }
          onPress={() => handleIconPress(food)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: paletaColors.primary,
    flexDirection: 'row',
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 12,
    padding: 8,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  portion: {
    color: 'white',
    fontWeight: '300',
  },
  calories: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
