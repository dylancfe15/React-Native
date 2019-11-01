import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import views
import HomeScreen from './screens/HomeScreen';
import AddNewContactScreen from './screens/AddNewContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import ViewContactScreen from './screens/ViewContactScreen';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen},
    Add: { screen: AddNewContactScreen},
    View: { screen: ViewContactScreen },
    Edit: { screen: EditContactScreen},
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#b83227',
      },
      headerTitleStyle: {
        color: '#fff',
      }
    }
  }
)

const App = createAppContainer(MainNavigator)

export default App;
