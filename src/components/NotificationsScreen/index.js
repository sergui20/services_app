import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import data from './notifications.json';
import Notification from "./Notification";

class NotificationsScreen extends Component {
    state = {
        notifications: []
    }

    componentDidMount() {
        this.setState({
            notifications: data
        })
    }

    render() {
        return (
            <SafeAreaView>
                <FlatList 
                    data={this.state.notifications}
                    renderItem={({item}) => <Notification {...item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}

export default NotificationsScreen;