import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Navigators
import MainNavigator from './src/stacks/Main/index';
import InboxNavigator from './src/stacks/Inbox/index';
import SearchNavigator from './src/stacks/Search/index';
import NotificationsNavigator from './src/stacks/notifications/index';
import UserNavigator from './src/stacks/User/index';

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

export default createAppContainer(AppNavigator);

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" style={{backgroundColor:"blue", height: '100%'}} />
//       <SafeAreaView>
        
//       </SafeAreaView>
//     </>
//   );
// };

// export default App;
