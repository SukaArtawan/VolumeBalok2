import React from 'react';
import {Text, View } from 'react-native';

const Header =(props) => {
  return (
    <View style = {styles.contHeader}>
      <Text style = {styles.textHeader}>{props.Header}</Text>
    </View>
  );
}
const styles = {
  contHeader:{
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    height:60,
    paddingTop:10,
    position:'relative'
  },
  textHeader: {
    fontSize:20,
    color:'white'
  }
}
export default Header;
