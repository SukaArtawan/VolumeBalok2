import React from 'react';
import {
  Text, TextInput,
  View
} from 'react-native';

export default class PrakiraanCuaca extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kota: ''
    };
}
  render() {
    return (
      <View>
          <Text>Masukkan Kota Lalu Tekan Enter</Text>
          <TextInput
            onSubmitEditing={
              (event) => this.setState({ kota : event.nativeEvent.text})
            }
            />
            <Text> Kotanya adalah : {this.state.kota}</Text>
      </View>
    );
  }
}
