import React from 'react';
import {View, Text} from 'react-native';

import ListCoins from '../../components/listCoins/ListCoins';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <ListCoins navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
