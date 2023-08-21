import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

/**
 component Loader (Muestra un spiner cuando se esta cargando informacion en la pantalla)
*/
const Loader = () => (
  <ActivityIndicator color="white" size="large" style={styles.loader} />
);

const styles = StyleSheet.create({
  loader: {
    margin: 20,
  },
});

export default Loader;
