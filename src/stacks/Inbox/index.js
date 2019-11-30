import { createStackNavigator } from 'react-navigation-stack';

import Main from '../../components/InboxScreen/index';

const InboxNavigator = createStackNavigator (
  {
    Main
  },
  {
    defaultNavigationOptions: {
      title: 'Inbox'
    },
    headerLayoutPreset: 'center'
  }
)

export default InboxNavigator;