import React from "react";
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

function profileOptions(props) {
    return (
        <ListItem leftIcon={<Icon name={props.icon} solid size={18} />} title={props.title} bottomDivider chevron />
    )
}

export default profileOptions;