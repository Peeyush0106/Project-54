import React, { Component } from 'react';
import { Text, View, Button, Image, Alert, Header } from 'react-native';
import { Audio } from 'expo-av';

export default class Button_ extends Component {
  buzz = async () => {
    await Audio.Sound.createAsync(
      { uri: "sound-effect.mp3" },
      { shouldPlay: true }
    );
    Alert.alert(this.props.info);
  };
  render() {
    return (
      <View>
        <Button
          color={this.props.color}
          title={this.props.title}
          onPress={this.buzz}
        />
      </View>
    );
  }
}
