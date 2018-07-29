import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GREEN_LIGHT, WHITE, GREEN } from '../../config/colors';

export interface Props {
    name: string;
    city: string;
    street: string;
    onShowPostsButtonPressed?: Function;
}
export interface State {}

export default class Styles extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const greetingMessage = 'Hello ' + this.props.name + '. Welcome back!' + '\n' +
                                'Are you still living in ' + this.props.city + ', ' + this.props.street + ' ?';
        return (
            <View style={styles.container}>
                <Text
                style={styles.titleText}
                >{greetingMessage}</Text>
                <TouchableOpacity
                style={styles.showPostsButton}
                onPress={() => this.props.onShowPostsButtonPressed()}
                >
                    <Text
                    style={styles.text}
                    >{'Show posts'}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    showPostsButton: {
        backgroundColor: GREEN_LIGHT,
        height: 50,
        width: 150,
        borderRadius: 40 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: WHITE,
        fontSize: 18
    },
    titleText: {
        color: GREEN,
        fontSize: 20,
        textAlign: 'center'
    }
});