import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const ArtistBox = ({ artist }) => {
  const [loading, setLoading] = useState(true);

  if (!artist) {
    return null;
  }

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#1DB954" style={styles.spinner} />}
      <Image
        source={{ uri: artist.artistImage }}
        style={styles.image}
        onLoad={() => setLoading(false)}
      />
      <Text style={styles.artistName}>{artist.artistName}</Text>
      <Text style={styles.monthlyListeners}> has <Text style={styles.boldText}>{artist.monthlyListeners}</Text> monthly listeners</Text>
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
  spinner: {
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  artistName: {
    color: 'white',
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  monthlyListeners: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#1DB954'
  },
});

export default ArtistBox;
