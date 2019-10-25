import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import CameraPage from './screens/CameraPage'

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    CameraPage: {screen: CameraPage},
  },{
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerStyle:{
        backgroundColor: '#B83227'
      },
      headerTitleStyle: '#FFF',
    }
  }
)

const App = createAppContainer(MainNavigator)

export default App
