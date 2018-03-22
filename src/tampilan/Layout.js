import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>Pendidikan Teknik Informatika</Text>
        </View>

        <View style={styles.boxSlider}>
          <Text style={styles.textSlider}>Slider</Text>
        </View>

        <View style={styles.boxContent}>
          <View style={styles.boxC1}>
            <View style={styles.boxC2}>
              <Text style={styles.textContent}>1</Text>
            </View>
            <View style={styles.boxC2}>
              <Text style={styles.textContent}>2</Text>
            </View>
            <View style={styles.boxC2}>
              <Text style={styles.textContent}>3</Text>
            </View>
            <View style={styles.boxC2}>
              <Text style={styles.textContent}>4</Text>
            </View>
          </View>

          <View style={styles.boxC1}>
            <View style={styles.boxC2}>
              <Text style={styles.textContent}>5</Text>
            </View>
            <View style={styles.boxC2}>
              <Text style={styles.textContent}>6</Text>
            </View>
            <View style={styles.boxC2}>
              <Text style={styles.textContent}>7</Text>
            </View>
            <View style={styles.boxC2}>
              <Text style={styles.textContent}>8</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxFoot}>
          <Text style={styles.textFoot}>#JaenKuliahdiPTI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex:1,
    backgroundColor: '#DCEDC8',
    flexDirection: 'column'
  },
  boxHeader: {
    flex: 2,
    backgroundColor: '#69F0AE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  boxSlider: {
    flex: 4,
    backgroundColor: '#81C784',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  boxContent: {
    flex: 4,
    backgroundColor: '#69F0AE',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
    },

  boxFoot: {
    flex: 2,
    backgroundColor: '#00E676',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  boxC1:{
    flex: 4,
    backgroundColor: '#69F0AE',
    flexDirection: 'row',
  },

  boxC2:{
    flex: 4,
    backgroundColor: '#76FF03',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  textHeader: {
    fontSize: 25,
    fontWeight:'bold',
    color: 'black'
  },
  textSlider: {
    fontSize: 40,
    color: 'black'
  },
  textContent: {
    fontSize: 25,
    color: 'white',
    textAlign: 'justify'
  },
  textFoot: {
    fontSize: 35,
    color: 'black',
    fontWeight:'bold',
    padding: 10
  }
});
