import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GameOverOverlay = ({ score, resetGame, handleBackToHome }) => (
  <View style={styles.overlay}>
    <Text style={styles.text}>Game Over!</Text>
    <Text style={styles.text}>Your Score: {score}</Text>
    <TouchableOpacity style={styles.button} onPress={resetGame}>
      <Text style={styles.buttonText}>Play Again</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
      <Text style={styles.buttonText}>Back to Home</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1DB954',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default GameOverOverlay;
