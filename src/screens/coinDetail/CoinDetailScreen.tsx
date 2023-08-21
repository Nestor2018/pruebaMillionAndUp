import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SectionList,
  FlatList,
  Text,
  Image,
  Pressable,
} from 'react-native';

import CoinMarketItem from '../../components/coinMarketItem/CoinMarketItem';
import Loader from '../../components/loader/Loader';
import colors from '../../utils/colors';
import {get} from '../../api/coins';
import {Icoin} from '../../interfaces/coin.interface';
import {Imarket} from '../../interfaces/market.interface';

/**
 screen CoinDetailScreen (Muestra el detalla de un coin)
  @param {any} props 
*/
const CoinDetailScreen = (props: any) => {
  const [coin, setCoin] = useState<any>({});
  const [markets, setMarkets] = useState<Array<Imarket>>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  /**
 obtenemos el titulo de los props que llegan
*/
  props.navigation.setOptions({title: coin.name});

  /**
   * Carga  de la informacion en la screen cuando se modifican las props
   */
  useEffect(() => {
    const itemCoin: Icoin = props.route.params.coin;
    setCoin(itemCoin);
    getMarkets(itemCoin.id);
  }, [props]);

  /**
   * Carga inicial de la informacion en la screen
   */
  useEffect(() => {
    const itemCoin: Icoin = props.route.params.coin;
    setCoin(itemCoin);
  }, []);

  /**
   * Mostrar el icono del coin
   */
  const getSymbolIcon = (name: String) => {
    if (name) {
      const symbol = name.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  };

  /**
   * Peticion get para traer los markets
   */
  const getMarkets = async (coinId: String) => {
    try {
      setLoading(true);
      const marketsList = await get(`/coin/markets/?id=${coinId}`);
      setMarkets(marketsList);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Secciones de la lista del componente
   */
  const getSections = (coin: Icoin) => {
    const section = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volumen 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change',
        data: [coin.percent_change_24h],
      },
    ];
    return section;
  };

  const renderItem = ({item}: {item: Imarket}) => (
    <CoinMarketItem market={item} />
  );

  return (
    <View style={styles.container} testID="coinDetail">
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{uri: getSymbolIcon(coin.name)}}
          />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>
      </View>
      {loading ? <Loader /> : null}
      <SectionList<any>
        style={styles.section}
        sections={getSections(coin)}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.sectionText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />

      <Text style={styles.marketsTitle}>Markets</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={markets}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  section: {
    maxHeight: 220,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16,
  },
  marketsTitle: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8,
  },
  btnFavoriteText: {
    color: colors.white,
  },
  btnFavoriteAdd: {
    backgroundColor: colors.picton,
  },
  btnFavoriteRemove: {
    backgroundColor: colors.carmine,
  },
});
export default CoinDetailScreen;
