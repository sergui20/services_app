import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

function Item(props) {
    return (
        <TouchableOpacity style={{width: 330}}>
            <Card 
                title={props.title} 
                image={require('../../images/background.jpeg')}>
                <Text>{props.description}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default Item;