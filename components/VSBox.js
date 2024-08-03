import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VSBox = () => (
  <View style={styles.container}>
    <Text style={styles.text}>VS</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default VSBox;