import React, { Component } from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';

class SearchScreen extends Component {
    render() {
        return (
            <Input  
                placeholder="Search Services" 
                leftIcon={<Icon name='search' size={20} color='gray' />} 
                containerStyle={{marginVertical: 10}}
                inputContainerStyle={{
                    borderWidth: 1, 
                    borderRadius: 20, 
                    height: Platform.OS === 'ios' ? 30 : 40, 
                    backgroundColor: '#eee', 
                    borderColor: 'transparent'
                }}
            />
        )
    }
}

export default SearchScreen;