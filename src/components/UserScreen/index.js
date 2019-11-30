import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements';

import ProfileOptions from './ProfileOptions';

class UserScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{backgroundColor: '#f5f5f5'}}>
                        <View style={{marginBottom: 20}}>
                            <Card containerStyle={styles.userCard}>
                                <View style={{alignItems: 'center'}}>
                                    <Avatar 
                                    rounded 
                                    size="large" 
                                    source={require('../../images/user.png')} 
                                    showEditButton
                                    />
                                </View>

                                <View style={styles.textContainer}>
                                    <Text h4>Sergui Morejon</Text>
                                    <Text>Full Stack Developer</Text>
                                </View>
                            </Card>
                        </View>

                        <View>
                            <View style={styles.optionsContainer}>
                                <Text h4 h4Style={styles.optionsText}>Personal</Text>
                                <ProfileOptions title="Guardados" icon="heart" />
                                <ProfileOptions title="Mis intereses" icon="folder-open" />
                            </View>

                            <View style={styles.optionsContainer}>
                                <Text h4 h4Style={styles.optionsText}>Negocios</Text>
                                <ProfileOptions title="Mis servicios" icon="clipboard-check" />
                                <ProfileOptions title="Mis órdenes" icon="clipboard-list" />
                                <ProfileOptions title="Publica un servicio" icon="pen-square" />
                            </View>

                            <View style={styles.optionsContainer}>
                                <Text h4 h4Style={styles.optionsText}>General</Text>
                                <ProfileOptions title="Estado online" icon="toggle-on" />
                                <ProfileOptions title="Metodos de pago" icon="wallet" />
                                <ProfileOptions title="Invitar amigos" icon="user-plus" />
                                <ProfileOptions title="Soporte" icon="info-circle" />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    userCard: {
        backgroundColor: '#b2dfdb',
        margin: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    optionsContainer: {
        marginBottom: 25
    },
    optionsText: {
        marginLeft: 12,
        marginBottom: 6,
        fontSize: 18
    }
});

export default UserScreen