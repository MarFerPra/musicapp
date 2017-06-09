import { StyleSheet } from 'react-native';

const landingPageStyles = StyleSheet.create({
  welcome: {
    fontFamily: 'monospace',
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255, .4)',
    borderRadius: 4,
    textAlign: 'center',
    color: 'rgba(0,0,0,1.0)',
    fontSize: 50,
    width: 350,
    marginLeft: 33,
    padding: 5,
    marginTop: 25
  },
  description: {
    fontSize: 20,
    margin: 50,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    color: 'rgba(0,0,0,1.0)',
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: 'rgba(0,0,0,.2)'
  },
  startButton: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    marginTop: 370
  }
});

const menuStyles = StyleSheet.create({
  instrumentIcon: {
    width: 120,
    height: 120,
    tintColor: 'rgba(0,0,0,1.0)',
    backgroundColor: 'rgba(255, 255, 255, .9)',
    margin: 10,
    marginLeft: 55,
    padding: 10
  },
  instrumentWrapper: {
    marginLeft: 80
  },
  title: {
    fontFamily: 'monospace',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    borderRadius: 4,
    textAlign: 'center',
    color: 'rgba(0,0,0,1.0)',
    fontSize: 35,
    width: 350,
    marginLeft: 33,
    padding: 5,
    marginTop: 25,
    marginBottom: 65
  }
});

const styles = {
  landingPage: landingPageStyles,
  menu: menuStyles
};

export default styles;
