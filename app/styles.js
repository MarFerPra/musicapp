import { StyleSheet } from 'react-native';

const landingPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
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
