import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../views/Home';
import {AddFood} from '../views/AddFood';

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#faf6fe',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddFood" component={AddFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
