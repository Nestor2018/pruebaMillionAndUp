import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';

import colors from '../../utils/colors';

/**
 component CoinSearch (barra de busqueda para filtrar coins)
*/

const CoinSearch = (props: any) => {
  const [query, setQuery] = useState<string>('');

  /**
  Cambia el state de query y devuelve su valor a onChange
  @param {string} queryInput
  */
  const handleText = (queryInput: string) => {
    setQuery(queryInput);
    if (props.onChange) {
      props.onChange(queryInput);
    }
  };

  return (
    <View testID="coinSearch">
      <TextInput
        testID="input"
        style={[
          styles.textInput,
          Platform.OS == 'ios' ? styles.textInputIos : styles.textInputAndroid,
        ]}
        onChangeText={handleText}
        value={query}
        placeholder="Search coin"
        placeholderTextColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: colors.blackPearl,
    paddingLeft: 16,
    color: colors.white,
  },
  textInputAndroid: {
    borderWidth: 2,
    borderBottomColor: colors.zircon,
  },
  textInputIos: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinSearch;
