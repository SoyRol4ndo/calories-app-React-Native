import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@rneui/themed';

import {Header} from '../components/Header';
import {Navbar} from '../components/Navbar';
import {TodayCalories} from '../components/TodayCalories';
import {TodayCaloriesProps} from '../interfaces/interfaces';
import {FoodContext} from '../context/FoodContext';
import {TodayMeals} from '../components/TodayMeals';
import {useStadistics} from '../hooks/useStadistics';

export const Home = () => {
  const [todayStadistics, setTodayStadistics] = useState<TodayCaloriesProps>({
    consumed: 0,
    porcentaje: 0,
    remaining: 0,
  });

  const {
    foodState: {foodsToday},
  } = useContext(FoodContext);

  useEffect(() => {
    setTodayStadistics(useStadistics({foodsToday}));
  }, [foodsToday]);

  return (
    <View style={{flex: 1}}>
      <Header />
      <Navbar texto="Calories" />
      <TodayCalories {...todayStadistics} />

      {foodsToday.length === 0 ? (
        <Text style={styles.title}> No hay comidas Agregadas...</Text>
      ) : (
        <TodayMeals foods={foodsToday} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});
