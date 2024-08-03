import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Easing, Image, ActivityIndicator } from 'react-native';

const LoadingScreen = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000, // Duration of one spin
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
          <Text style={styles.heading}>Statify</Text>

    <ActivityIndicator size="large" color="#1DB954" style={styles.spinner} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  heading: {
    color: '#1DB954',
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  loadingText: {
    color: '#1DB954',
    marginTop: 20,
  },
});

export default LoadingScreen;