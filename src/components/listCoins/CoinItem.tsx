import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

import colors from '../../utils/colors';

/**
 component CoinItem (Renderiza un coin)
  @param {object} coin 
  @param {Function} onPress
*/

const CoinItem = ({coin, onPress}: any) => {
  const {symbol, name, price_usd, percent_change_1h} = coin;
  /**
 Muestra una imagen dependiendo de si el valor del coin subio o bajo en la ustima hora
*/
  const getImageArrow = (percentChange: number) => {
    return percentChange > 0
      ? require('../../assets/arrow_up.png')
      : require('../../assets/arrow_down.png');
  };

  return (
    <Pressable onPress={onPress} style={styles.container} testID="coinItem">
      <View style={styles.row}>
        <Text style={styles.symbolText}>{symbol}</Text>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.price}> {`$${price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percentText}>{percent_change_1h}</Text>
        <Image
          source={getImageArrow(percent_change_1h)}
          style={styles.imageIcon}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: colors.zircon,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: colors.white,
    fontSize: 14,
  },
  percentText: {
    color: colors.white,
    fontSize: 12,
    marginRight: 8,
  },
  price: {
    color: colors.white,
    fontSize: 14,
    marginLeft: 12,
  },
  imageIcon: {
    width: 22,
    height: 22,
  },
});

export default CoinItem;
