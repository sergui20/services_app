import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';

import SearchOptions from './SearchOptions';

class SearchScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <View>
                        <SearchBar 
                            placeholder="Search services"
                            lightTheme
                            round={Platform.OS === 'ios' ? true : false}
                            containerStyle={styles.searchBarContainer}
                            inputContainerStyle={{backgroundColor: '#eee'}}
                        />
                    </View>

                    <ScrollView>
                        <SearchOptions title="Graphics & Design" />
                        <SearchOptions title="Digital Marketing" />
                        <SearchOptions title="Writing & Translation" />
                        <SearchOptions title="Video & Animation" />
                        <SearchOptions title="Music & Audio" />
                        <SearchOptions title="Programming & Tech" />
                        <SearchOptions title="Business" />
                        <SearchOptions title="Lifestyle" />
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        borderBottomWidth: 0
    }
})

export default SearchScreen;