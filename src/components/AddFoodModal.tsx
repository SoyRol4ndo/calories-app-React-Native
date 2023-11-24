import {Button, Icon, Input} from '@rneui/themed';
import React, {useContext, useEffect, useState} from 'react';
import {Modal, View, StyleSheet, Text, Alert} from 'react-native';
import {paletaColors} from '../theme/colors';
import {FoodContext} from '../context/FoodContext';
import {Food} from '../interfaces/interfaces';

interface Props {
  onClose: () => void;
  visible: boolean;
}

export const AddFoodModal = ({onClose, visible}: Props) => {
  const [calories, setCalories] = useState(0);
  const [nombre, setNombre] = useState('');
  const [porcion, setPorcion] = useState(0);
  const id = new Date().getTime();
  const [foodArrayTemp, setFoodArrayTemp] = useState<Food[]>([]);

  const {AddFood} = useContext(FoodContext);

  useEffect(() => {
    setCalories(0);
    setNombre('');
    setPorcion(0);
  }, [visible]);

  const handleSubmit = () => {
    const foodObject: Food = {
      calories,
      nombre,
      porcion,
      id,
    };
    setFoodArrayTemp([...foodArrayTemp, foodObject]);
    AddFood(foodObject);
    Alert.alert('Comida guardada exitosamente...');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => onClose()}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.closeContainer}>
            <Button
              title="X"
              onPress={() => onClose()}
              type="clear"
              titleStyle={{color: paletaColors.primary, fontSize: 20}}
            />
          </View>
          <Text style={styles.title}>Add Food</Text>
          {/* Formulario */}
          <View style={styles.formItem}>
            <View style={styles.inputContainer}>
              <View style={{flex: 2}}>
                <Input
                  onChangeText={text => setCalories(Number(text))}
                  keyboardType="numeric"
                  placeholder="200"
                />
              </View>
              <Text style={{fontWeight: 'bold', color: '#000', flex: 1}}>
                KCal
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={{flex: 2}}>
                <Input onChangeText={setNombre} placeholder="Sopa" />
              </View>
              <Text style={{fontWeight: 'bold', color: '#000', flex: 1}}>
                Nombre
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={{flex: 2}}>
                <Input
                  onChangeText={text => setPorcion(Number(text))}
                  placeholder="50 gr"
                  keyboardType="numeric"
                />
              </View>
              <Text style={{fontWeight: 'bold', color: '#000', flex: 1}}>
                Porcion
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Button
              title="+ Add"
              titleStyle={{fontWeight: 'bold'}}
              radius="md"
              // disabled={calories === 0 || nombre.trim() === '' || porcion === 0}
              color={paletaColors.primary}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // paddingBottom: 100,
  },
  content: {
    width: '75%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 5,
  },
  closeContainer: {
    alignItems: 'flex-end',
  },
  formItem: {},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
