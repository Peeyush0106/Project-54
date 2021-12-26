import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './components/Button';

const mainPageStyles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

export default class App extends Component {
  render() {
    return (
      <View style={mainPageStyles}>
        <View style={{ marginTop: 100 }}>
          <Button
            title="Charles Babbage"
            color="red"
            info="The father of computing"
          />
        </View>

        <View style={{ marginTop: 100 }}>
          <Button
            title="Mahatma Gandhi"
            color="blue"
            info="The father of the nation"
          />
        </View>

        <View style={{ marginTop: 100 }}>
          <Button
            title="Nelson Mandela"
            color="purple"
            info="The first black president of South Africa"
          />
        </View>
        <View style={{ marginTop: 100 }}>
          <Button
            title="Mother Teresa"
            color="green"
            info="Saint Teresa of Calcutta, a public helper"
          />
        </View>
      </View>
    );
  }
}
