import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';

import musicBackground from '../../assets/images/music-background.png';

import styles from '../styles';

export default class MusicApp extends Component {
  static navigationOptions = {
    title: 'Home page',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image source={musicBackground} style={styles.landingPage.backgroundImage} >

          <Text style={styles.landingPage.welcome}>
            MusicApp
          </Text>
          <Text style={styles.landingPage.description}>
            Enseñanza de instrumentos musicales para los a más pequeños
          </Text>
          <View>

            <Button
              large
              icon={{
                name: 'music',
                type: 'font-awesome',
                buttonStyle: styles.landingPage.startButton
              }}
              title='EMPEZAR'
              onPress={() => navigate('Menu')}
            />
          </View>

      </Image>
    );
  }
}
