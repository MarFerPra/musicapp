import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

import styles from '../styles';

export default class MusicApp extends Component {
  static navigationOptions = {
    title: 'MusicApp',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.landingPage.container}>
        <Text style={styles.landingPage.welcome}>
          MusicApp
        </Text>
        <Text style={styles.landingPage.instructions}>
          Aplicacion para la enseñanza de instrumentos musicales los a más pequeños
        </Text>
        <View>
          <Button
  onPress={() => navigate('Menu')}
  title="EMPEZAR"
/>
        </View>
      </View>
    );
  }
}
