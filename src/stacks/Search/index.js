import { createStackNavigator } from 'react-navigation-stack';

import Main from '../../components/SearchScreen/index';

const SearchNavigator = createStackNavigator (
  {
    Main
  },
  {
    headerMode: 'none'
  }
)

export default SearchNavigator;