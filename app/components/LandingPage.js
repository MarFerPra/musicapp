import React, { Component } from 'react';
import { Button } from 'react-native-elements'
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';

import musicBackground from '../../assets/images/piano-background2.jpg';

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

          <View>

            <Button
              large
              buttonStyle={styles.landingPage.startButton}
              icon={{
                name: 'music',
                type: 'font-awesome'
              }}
              title='EMPEZAR'
              onPress={() => navigate('Menu')}
            />
          </View>

      </Image>
    );
  }
}
