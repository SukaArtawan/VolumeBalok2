import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
//import Volumebalok from './src/latihan/VolumeBalok';
//import Header from './src/cuaca/Header';
//import PrakiraanCuaca from './src/cuaca/PrakiraanCuaca';
import TampilanLayout from './src/tampilan/Layout';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.contMain}>
        <TampilanLayout/>
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
