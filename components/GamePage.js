import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ArtistBox from './ArtistBox';
import NextArtistBox from './NextArtistBox';
import ScoreDisplay from './ScoreDisplay';
import GameOverOverlay from './GameOverOverlay';

const GamePage = ({ currentArtist, nextArtist, score, gameOver, handleGuess, resetGame, handleBackToHome }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Statify</Text>
    <View style={styles.artistsContainer}>
      {currentArtist && <ArtistBox artist={currentArtist} />}
      {/* {!gameOver && <VSBox />} */}
      <ScoreDisplay score={score} /> 
      {nextArtist && <NextArtistBox artist={nextArtist} gameOver={gameOver} handleGuess={handleGuess} />}
    </View>
    {gameOver && <GameOverOverlay score={score} resetGame={resetGame} handleBackToHome={handleBackToHome} />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 35,
  },
  heading: {
    color: '#1DB954',
    textAlign: 'center',
    fontSize: 32,
    marginVertical: 20,
    fontWeight: 'bold'
  },
  artistsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default GamePage;