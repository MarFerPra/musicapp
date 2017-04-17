import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LandingPage from './app/components/LandingPage';
import InstrumentMenu from './app/components/InstrumentMenu';

const MusicApp = StackNavigator({
  Home: { screen: LandingPage },
  Menu: { screen: InstrumentMenu }
})

AppRegistry.registerComponent('MusicApp', () => MusicApp);
