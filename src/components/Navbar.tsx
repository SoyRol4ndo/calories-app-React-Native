import {Button} from '@rneui/themed';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {paletaColors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  texto: string;
  onPress?: () => void;
}

export const Navbar = ({texto}: Props) => {
  const {navigate, canGoBack} = useNavigation<any>();
  return (
    <View style={styles.caloriesContainer}>
      <View>
        <Text style={styles.caloriesText}>{texto}</Text>
      </View>

      <Button
        icon={<Icon name="add-circle-outline" size={30} color="white" />}
        radius="lg"
        color={paletaColors.primary}
        onPress={() =>
          canGoBack() ? console.log('first') : navigate('AddFood')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
