import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Text } from 'react-native-elements';

import Item from './Item';
import data from '../../users.json';

class Main extends Component {
    state = {
        services: []
    }

    componentDidMount() {
        this.setState({
            services: data
        })
    }

    render() {
        return (
            <SafeAreaView>
                <Text h4 style={{marginTop: 15, marginLeft: 15}}>Popular</Text>
                <FlatList 
                    horizontal={true}
                    data={this.state.services}
                    renderItem={({item}) => <Item {...item} />}
                    keyExtractor={item => item.id}
                />  
            </SafeAreaView>
        )
    }
}

export default Main;