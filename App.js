import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from './screens/Home';
import Follow from './screens/Follow';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Follow: {screen: Follow}
}, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#026474'
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }
});

const App = createAppContainer(MainNavigator);
export default App;
