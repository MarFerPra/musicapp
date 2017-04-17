import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import styles from '../styles';

const drumIcon = require('../../assets/images/drum-icon.png');
const fluteIcon = require('../../assets/images/flute-icon.png');
const guitarIcon = require('../../assets/images/guitar-icon.png');
const trumpetIcon = require('../../assets/images/trumpet-icon.png');

export default class InstrumentMenu extends Component {
  static navigationOptions = {
    title: 'INSTRUMENTOS',
  };

  playSound(sound){
    console.log("Playing sound: ", sound);
  }

  render() {
    return (
      <View style={styles.landingPage.container}>
        <Text>MENU!</Text>

        <TouchableHighlight onPress={() => this.playSound('drum')}>
          <Image source={drumIcon} style={styles.menu.instrumentIcon}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.playSound('flute')}>
          <Image source={fluteIcon} style={styles.menu.instrumentIcon}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.playSound('guitar')}>
          <Image source={guitarIcon} style={styles.menu.instrumentIcon}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.playSound('trumpet')}>
          <Image source={trumpetIcon} style={styles.menu.instrumentIcon}/>
        </TouchableHighlight>
      </View>
    );
  }
}
