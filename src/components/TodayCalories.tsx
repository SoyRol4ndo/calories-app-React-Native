import {View, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {paletaColors} from '../theme/colors';
import {TodayCaloriesProps} from '../interfaces/interfaces';
import {Text} from '@rneui/base';

export const TodayCalories = ({
  consumed,
  remaining,
  porcentaje,
}: TodayCaloriesProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <AnimatedCircularProgress
          size={120}
          width={10}
          fill={porcentaje}
          tintColor={paletaColors.primary}
          backgroundColor="#b7b5c4"
          rotation={0}
          children={() => <Text style={styles.porcentaje}>{porcentaje} %</Text>}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.today}>Today</Text>
        <View style={styles.rightItem}>
          <Text>Total</Text>
          <Text>2000</Text>
        </View>
        <View style={styles.rightItem}>
          <Text>Consumed</Text>
          <Text>{consumed}</Text>
        </View>
        <View style={styles.rightItem}>
          <Text>Remaining</Text>
          <Text>{remaining}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 12,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
  porcentaje: {
    fontSize: 25,
    fontWeight: 'bold',
    color: paletaColors.primary,
  },
  rightItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  today: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14,
    color: '#000',
  },
});
