import { createStackNavigator } from 'react-navigation-stack';

import Main from '../../components/NotificationsScreen/index';

const NotificationsNavigator = createStackNavigator (
  {
    Main
  },
  {
    defaultNavigationOptions: {
      title: 'Notifications'
    },
    headerLayoutPreset: 'center'    
  }
)

export default NotificationsNavigator;