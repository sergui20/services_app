import { createStackNavigator } from 'react-navigation-stack';

import Main from '../../components/MainScreen/index';

const MainNavigator = createStackNavigator (
  {
    Main
  },
  {
    defaultNavigationOptions: {
      title: 'Cássual'
    },
    headerLayoutPreset: 'center'
  }
)

export default MainNavigator;