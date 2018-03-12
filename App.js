import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
//import Volumebalok from './src/latihan/VolumeBalok';
import Header from './src/cuaca/Header';
import PrakiraanCuaca from './src/cuaca/PrakiraanCuaca';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.contMain}>
        <Header Header = {'Prakiraan Cuaca'} />
        <PrakiraanCuaca/>
      </View>
    );
  }
}
const styles = {
  contMain:{
    flex:1,
    backgroundColor: 'grey',
  }
}
