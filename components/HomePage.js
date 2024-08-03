import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const HomePage = ({ setCurrentPage, highScore }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Statify</Text>
    <Text style={styles.description}>
      Statify is a higher or lower guessing game where you guess if a random Spotify artist has a higher or lower amount of monthly listeners than the current Spotify artist.
    </Text>
    <Text style={styles.description}>
      How high of a streak can you get?
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => setCurrentPage('game')}>
      <Text style={styles.buttonText}>Start Game</Text>
    </TouchableOpacity>
    <Text style={styles.highScore}>High Score: {highScore} 🔥🔥</Text>
    <View style={styles.contactBox}>
      <Text style={styles.contactText}>
        Contact us: <Text style={styles.link} onPress={() => Linking.openURL('mailto:statify.lol@gmail.com')}>statify.lol@gmail.com</Text>
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  heading: {
    color: '#1DB954',
    fontSize: 32,
    marginTop: 80,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  description: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  highScore: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 50
  },
  button: {
    backgroundColor: '#1DB954',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  contactBox: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  contactText: {
    color: 'white',
    fontSize: 14,
  },
  link: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default HomePage;