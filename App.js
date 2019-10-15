import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Navigators
import MainNavigator from './src/stacks/Main/index';
import InboxNavigator from './src/stacks/Inbox/index';
import SearchNavigator from './src/stacks/Search/index';
import NotificationsNavigator from './src/stacks/notifications/index';

const AppNavigator = createBottomTabNavigator(
  {
    Main: MainNavigator,
    Inbox: InboxNavigator,
    Search: SearchNavigator,
    Notifications: NotificationsNavigator
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
