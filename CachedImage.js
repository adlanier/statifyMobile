import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

const CachedImage = ({ uri, style }) => {
  const [loading, setLoading] = useState(true);
  const [currentUri, setCurrentUri] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      setLoading(true);
      try {
        await Image.prefetch(uri);
        setCurrentUri(uri);
        setLoading(false);
      } catch (error) {
        console.error('Error preloading image:', error);
        setLoading(false);
      }
    };

    loadImage();
  }, [uri]);

  return (
    <View style={[style, styles.container]}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#1DB954"
          style={styles.spinner}
        />
      )}
      {currentUri && (
        <Image
          source={{ uri: currentUri }}
          style={[style, loading ? styles.hidden : null]}
          onLoadEnd={() => setLoading(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    position: 'absolute',
  },
  hidden: {
    display: 'none',
  },
});

export default CachedImage;
