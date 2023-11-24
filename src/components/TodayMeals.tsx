import {Text} from '@rneui/themed';
import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {Food} from '../interfaces/interfaces';
import {MealItem} from './MealItem';
// import {Text} from 'react-native-elements';

interface Props {
  foods: Food[];
}

export const TodayMeals = ({foods}: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        renderItem={({item}) => (
          <MealItem food={item} key={item.id} isAbleToAdd={false} />
        )}
        ListHeaderComponent={() => <Text style={styles.title}>Comidas</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});
