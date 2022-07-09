import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Guide(props) {

  useEffect(() => {
    props.setText('이해했어요');
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>사진 가이드</Text>
      </View>
      <View style={styles.exampleImageContainer}>
        <View style={{alignItems: 'center'}}>
        <Image style={styles.img} source={require('../assets/images/imageEx.jpg')} />
        <Text style={styles.text}>이렇게 찍어주세요</Text>
        <AntDesign style={styles.icon} name="checkcircle" size={40} color="blue" />
        </View>

        <View style={{alignItems: 'center'}}>
        <Image style={styles.img} source={require('../assets/images/imageNonEx.jpg')} />
        <Text style={styles.text}>이러면 그릴 수 없어요</Text>
        <AntDesign style={styles.icon} name="closecircle" size={40} color="red" />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  titleContainer: {
    backgroundColor: '#FCFCFC',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  exampleImageContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  img : {
    width: 190,
    height: 190,
    margin: 5,
  },
  text: {
    color: '#FCFCFC',
    fontSize: 20,
  },
  icon: {
    marginTop: 50,
  },
})