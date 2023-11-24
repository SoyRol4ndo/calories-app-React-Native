import React, {useContext, useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from '@rneui/themed';

import {Header} from '../components/Header';
import {AddFoodModal} from '../components/AddFoodModal';
import {paletaColors} from '../theme/colors';
import {FoodContext} from '../context/FoodContext';
import {MealItem} from '../components/MealItem';
import {Food} from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';

export const AddFood = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState('');

  const {
    foodState: {foods},
  } = useContext(FoodContext);
  const [foodResult, setFoodResult] = useState<Food[]>(foods);

  useEffect(() => {
    const result = foods.filter((item: Food) =>
      item.nombre
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().trim()),
    );
    setFoodResult(result);
  }, [search]);

  useEffect(() => {
    setFoodResult(foods);
  }, [isVisible]);

  return (
    <View style={{flex: 1}}>
      <Header />

      <View style={styles.caloriesContainer}>
        <View>
          <Text style={styles.caloriesText}>Add Food</Text>
        </View>

        <Button
          icon={<Icon name="add-circle-outline" size={30} color="white" />}
          radius="lg"
          color={paletaColors.primary}
          size="lg"
          titleStyle={{color: '#000'}}
          onPress={() => setIsVisible(true)}
        />
      </View>

      <View style={{...styles.searchContainer}}>
        <View style={{flex: 1}}>
          <Input
            placeholder="Search: apples, pie, soda..."
            onChangeText={setSearch}
          />
        </View>
      </View>

      <FlatList
        data={foodResult}
        renderItem={({item}) => (
          <MealItem food={item} key={item.id} isAbleToAdd />
        )}
      />

      <AddFoodModal visible={isVisible} onClose={() => setIsVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    // flex: 1,
    marginRight: 12,
    marginVertical: 12,
    flexDirection: 'row',
  },
  caloriesContainer: {
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  caloriesText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
