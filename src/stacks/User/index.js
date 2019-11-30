import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Main from '../../components/UserScreen/index';

const MainNavigator = createStackNavigator (
  {
    Main
  },
  {
    defaultNavigationOptions: {
      title: 'Profile',
      headerRight: <Icon name="cog" solid size={20} style={{marginRight: 18}} />
    },
    headerLayoutPreset: 'center'
  }
)

export default MainNavigator;