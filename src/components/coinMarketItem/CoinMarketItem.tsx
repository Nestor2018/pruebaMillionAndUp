import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colors from '../../utils/colors';

interface CoinMarketItemProps {
  market: {
    name: string;
    price_usd: string;
  };
}

/**
 component CoinMarketItem (Renderiza market del coin)
  @param {object} market 
**/
const CoinMarketItem: React.FC<CoinMarketItemProps> = ({market}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText} testID="marketName">
        {market.name}
      </Text>
      <Text style={styles.priceText} testID="marketPrice">
        {market.price_usd}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    borderColor: colors.zircon,
    borderWidth: 1,
    padding: 16,
    margin: 8,
    alignItems: 'center',
  },
  nameText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  priceText: {
    color: colors.white,
  },
});

export default CoinMarketItem;
