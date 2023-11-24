import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Image, Text} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {paletaColors} from '../theme/colors';

import Icon from 'react-native-vector-icons/Ionicons';

const staticInfo = {
  name: 'Rolando Llanes',
  uri: require('../assets/photo-perfil.jpg'),
};

export const Header = () => {
  const {top} = useSafeAreaInsets();

  const {canGoBack, goBack} = useNavigation<any>();

  return (
    <View>
      <View style={{...styles.container, marginTop: top}}>
        {canGoBack() && (
          <Button
            icon={
              <Icon
                name="arrow-back-outline"
                size={30}
                color={paletaColors.fury}
              />
            }
            type="clear"
            onPress={() => goBack()}
          />
        )}

        <View>
          <Text style={styles.name}>Hello {staticInfo.name}</Text>
          <Text style={styles.subtitle}>Wellcome back to your goal</Text>
        </View>
        <Image source={staticInfo.uri} style={styles.profileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#808080',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 24,
  },
});
