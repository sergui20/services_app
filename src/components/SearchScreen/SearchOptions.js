import React from 'react';
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';

function SearchOptions(props) {
    return (
        <ListItem leftIcon title={props.title} bottomDivider />
    )
}

export default SearchOptions