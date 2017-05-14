import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import Sound from 'react-native-sound';
import {Grid, Row} from 'react-native-elements';
import musicBackground from '../../assets/images/music-background.png';
import styles from '../styles';

const drumIcon = require('../../assets/images/drum-icon.png');
const fluteIcon = require('../../assets/images/flute-icon.png');
const guitarIcon = require('../../assets/images/guitar-icon.png');
const trumpetIcon = require('../../assets/images/trumpet-icon.png');

export default class InstrumentMenu extends Component {
  static navigationOptions = {
    title: 'INSTRUMENTOS',
  };

  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);

    const drum = new Sound('drum.mp3', Sound.MAIN_BUNDLE, this.soundErrorMessage);
    const flute = new Sound('flute.mp3', Sound.MAIN_BUNDLE, this.soundErrorMessage);
    const guitar = new Sound('guitar.mp3', Sound.MAIN_BUNDLE, this.soundErrorMessage);
    const trumpet = new Sound('trumpet.mp3', Sound.MAIN_BUNDLE, this.soundErrorMessage);

    this.state = {
      sounds: {
        drum,
        flute,
        guitar,
        trumpet
      },
      activeSound: null
    }
  }

  soundErrorMessage(error) {
    console.log("Failed to load sound: ", error);
  }

  playSound(sound) {
    console.log("Playing sound: ", sound);

    if (this.state.activeSound) {
      const activeSoundName = this.state.activeSound;
      this.state.sounds[activeSoundName].stop();
    }

    this.setState({
      activeSound: sound
      }, () => {
        console.log("Setted active sound, now playing it.", this.state);
        this.state.sounds[sound].play((success) => {
          console.log("Sucessfully played!", success);
        });
      }
    );
  }

  render() {
    return (
      <Image source={musicBackground} style={styles.landingPage.backgroundImage} >
        <Grid>
          <Row size={25}>
            <Text style={styles.menu.title}>
              Instrumentos
            </Text>
          </Row>
          <Row size={25}>
            <TouchableHighlight
              onPress={() => this.playSound('drum')}
              style={styles.menu.instrumentWrapper}
            >
              <Image source={drumIcon} style={styles.menu.instrumentIcon}/>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.playSound('flute')}
            >
              <Image source={fluteIcon} style={styles.menu.instrumentIcon}/>
            </TouchableHighlight>
          </Row>

          <Row size={25}>
            <TouchableHighlight
              onPress={() => this.playSound('guitar')}
              style={styles.menu.instrumentWrapper}
            >
              <Image source={guitarIcon} style={styles.menu.instrumentIcon}/>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.playSound('trumpet')}
            >
              <Image source={trumpetIcon} style={styles.menu.instrumentIcon}/>
            </TouchableHighlight>
          </Row>

          <Row size={25}></Row>
        </Grid>
      </Image>
    );
  }
}
