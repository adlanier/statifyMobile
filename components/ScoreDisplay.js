import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreDisplay = ({ score }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Score: {score}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default ScoreDisplay;