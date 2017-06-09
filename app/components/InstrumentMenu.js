import React, { Component } from 'react';
import { Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import Sound from 'react-native-sound';
import {Grid, Row} from 'react-native-elements';
import musicBackground from '../../assets/images/piano-background2.jpg';
import styles from '../styles';

const drumIcon = require('../../assets/images/drum-icon.png');
const fluteIcon = require('../../assets/images/flute-icon.png');
const guitarIcon = require('../../assets/images/guitar-icon.png');
const trumpetIcon = require('../../assets/images/trumpet-icon.png');

let instrumentSounds = {
  drum: new Sound('drum.mp3', Sound.MAIN_BUNDLE, this.soundErrorMessage),
  flute: new Sound('flute.mp3', Sound.MAIN_BUNDLE, this.soundErrorMessage),
  guitar: new Sound('guitar.mp3', Sound.MAIN_BUNDLE, this.soundErrorMessage),
  trumpet: new Sound('trumpet.mp3', Sound.MAIN_BUNDLE, this.soundErrorMessage)
}

export default class InstrumentMenu extends Component {
  static navigationOptions = {
    title: 'INSTRUMENTOS',
  };

  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.state = {
      activeSound: null
    }
  }

  soundErrorMessage(error) {
    console.log("Failed to load sound: ", error);
  }

  loadNewSound(sound) {
    return new Sound(sound + '.mp3', Sound.MAIN_BUNDLE, this.soundErrorMessage);
  }

  playSound(sound) {
    console.log("Playing sound: ", sound);
    const activeSound = this.state.activeSound;
    if (activeSound && activeSound != sound) {
      console.log("Stopping: ", instrumentSounds);
      instrumentSounds[activeSound].stop();
      instrumentSounds[activeSound].release();
      instrumentSounds[activeSound] = this.loadNewSound(activeSound);
    }

    this.setState({
      activeSound: sound
      }, () => {
        console.log("Setted active sound, now playing it.", this.state);
        instrumentSounds[sound].play((success) => {
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
            <TouchableWithoutFeedback
              onPress={() => this.playSound('drum')}
              style={styles.menu.instrumentWrapper}
            >
              <Image source={drumIcon} style={styles.menu.instrumentIcon}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => this.playSound('flute')}
            >
              <Image source={fluteIcon} style={styles.menu.instrumentIcon}/>
            </TouchableWithoutFeedback>
          </Row>

          <Row size={25}>
            <TouchableWithoutFeedback
              onPress={() => this.playSound('guitar')}
              style={styles.menu.instrumentWrapper}
            >
              <Image source={guitarIcon} style={styles.menu.instrumentIcon}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => this.playSound('trumpet')}
            >
              <Image source={trumpetIcon} style={styles.menu.instrumentIcon}/>
            </TouchableWithoutFeedback>
          </Row>

          <Row size={25}></Row>
        </Grid>
      </Image>
    );
  }
}
