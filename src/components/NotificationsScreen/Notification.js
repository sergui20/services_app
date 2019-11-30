import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Card, Avatar, Text } from 'react-native-elements';

function Notification(props) {
    return (
        <TouchableOpacity>
            <Card containerStyle={styles.cardContainer}>
                <View style={styles.messageBox}>
                    <View>
                        <Avatar rounded title={props.sender} />
                    </View>

                    <View style={styles.textContainer}>
                        <Text h4 h4Style={styles.subjectText}>{renderSubject(props.subject, props.sender)}</Text>
                        <Text numberOfLines={2}>{props.content}</Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

function renderSubject(subject, sender) {
    switch(subject) {
        case 'Discount':
            return 'Discount'
        break;
        case 'Question':
            return `${sender} asked you a question`
        break;
    }
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
    subjectText: {
        fontSize: 16, 
        fontWeight: 'bold'
    }
})

export default Notification;