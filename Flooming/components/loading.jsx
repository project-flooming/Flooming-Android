import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Loading(props) {
  return (
    <ImageBackground
      source={require('../assets/images/loadingBackground.jpg')}
      style={styles.backgroundImage}
      imageStyle={{ opacity: 0.9 }}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>꽃을 그리고 있어요</Text>
        <Text style={styles.text}>잠시만 기다려 주세요 :)</Text>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#FCFCFC',
    fontSize: 28,
    fontFamily: 'symkyungha',
  }
})