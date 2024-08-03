import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CachedImage from '../CachedImage';

const NextArtistBox = ({ artist, gameOver, handleGuess }) => {
  if (!artist) {
    return null;
  }

  return (
    <View style={styles.container}>
      <CachedImage uri={artist.artistImage} style={styles.image} />
      {!gameOver && (
        <View style={styles.guessContainer}>
          <Text style={styles.prompt}>
            Does <Text style={styles.boldText}>{artist.artistName}</Text> have more or less monthly listeners?
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleGuess(true)}>
              <Text style={styles.buttonText}>Higher 👆</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleGuess(false)}>
              <Text style={styles.buttonText}>Lower 👇</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    width: '90%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  guessContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  prompt: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#1DB954',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default NextArtistBox;