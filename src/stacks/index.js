import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Navigators
import MainNavigator from './Main/index';
import InboxNavigator from './Inbox/index';
import SearchNavigator from './Search/index';
import NotificationsNavigator from './notifications/index';
import UserNavigator from './User/index';

const AppNavigator = createBottomTabNavigator(
  {
    Main: MainNavigator,
    Inbox: InboxNavigator,
    Search: SearchNavigator,
    Notifications: NotificationsNavigator,
    User: UserNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch(routeName) {
          case 'Main':
            iconName = "home"
          break;
          case 'Inbox':
            iconName = "inbox"
          break;
          case 'Search':
              iconName = "search"
          break;
          case 'Notifications':
              iconName = "bell"
          break;
          case 'User':
              iconName = "user"
          break;
        }

        return <Icon name={iconName} size={22} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#004073',
      inactiveTintColor: 'gray',
      showLabel: false
    }
  }
);

export default AppNavigator;
