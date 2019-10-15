import React from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Text, Card } from 'react-native-elements';

function Message (props) {
    const name = "S"
    const lastname = "M"
    return (
        <TouchableOpacity>
            <Card containerStyle={styles.cardContainer}>
                <View style={styles.messageBox}>
                    <View>
                        <Avatar rounded title={`${name}${lastname}`} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text h4 h4Style={styles.personName}>{props.author}</Text>
                        <Text numberOfLines={2} style={{flexShrink: 1}}>{props.description}</Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 0, 
        marginHorizontal: 0, 
        paddingHorizontal: 5
    },
    messageBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textContainer: {
        flex: 1, 
        marginLeft: 15
    },
    personName: {
        fontSize: 16, 
        fontWeight: 'bold'
    }
})

export default Message