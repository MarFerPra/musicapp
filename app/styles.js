import { StyleSheet } from 'react-native';

const landingPageStyles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    margin: 50,
    backgroundColor: 'rgba(224, 216, 193, 1.0)',
    borderRadius: 4,
    borderWidth: 0.5,
    textAlign: 'center',
    fontSize: 32,
    padding: 5
  },
  description: {
    fontSize: 20,
    margin: 50,
    backgroundColor: 'rgba(224, 216, 193, 1.0)',
    borderRadius: 4,
    borderWidth: 0.5,
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: 'rgba(0,0,0,.2)',
    textAlign: 'center'
  },
  startButton: {
    color: 'rgba(224, 216, 193, 1.0)'
  }
});

const menuStyles = StyleSheet.create({
  instrumentIcon: {
    width: 100,
    height: 100
  }
});

const styles = {
  landingPage: landingPageStyles,
  menu: menuStyles
};

export default styles;
