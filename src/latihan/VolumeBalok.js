import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class VolumeBalok extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      P:0,
      L:0,
      T:0,
      Volume:0
    };
  }
  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#4CAF50'}}>

        <View style={{backgroundColor:'#E8F5E9'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'black', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#C8E6C9'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang"
              onChangeText={(P)=>this.setState({P})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Lebar"
              onChangeText={(L)=>this.setState({L})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(T)=>this.setState({T})}
              keyboardType = 'numeric'
            />
       </View>

        <View style={{margin:20, backgroundColor:'#A5D6A7'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Panjang =  {this.state.P} {"\n"}
              Lebar =  {this.state.L} {"\n"}
              Tinggi =  {this.state.T} {"\n"}
              Volume = {this.state.P*this.state.L*this.state.T}
          </Text>
         </View>

   </View>

    );
  }
}


AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
