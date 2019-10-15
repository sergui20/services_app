import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';

import data from '../../users.json';
import Message from './Message';

class Main extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        this.setState({
            messages: data
        })
    }

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.messages}
                    renderItem={({item}) => <Message {...item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}

export default Main;