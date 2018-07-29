import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { GREEN_LIGHT, WHITE, GREEN } from '../../config/colors';

export interface Props {
    name: string;
    city: string;
    street: string;
    onShowPostsButtonPressed?: Function;
    userNotFound: boolean;
    loading: boolean;
}
export interface State { }

export default class Styles extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const greetingMessage = 'Hello ' + this.props.name + '. Welcome back!' + '\n' +
            'Are you still living in ' + this.props.city + ', ' + this.props.street + ' ?';
        const userNotFountMessage = 'User has not been found. Please try again later';
        return (
            <View style={styles.container}>
                {
                    this.props.loading &&
                    <ActivityIndicator
                        size='large'
                        color={GREEN}
                    />
                }
                {
                    !this.props.userNotFound &&
                    !this.props.loading &&
                    <Text
                        style={styles.titleText}
                    >{greetingMessage}</Text>
                }
                {
                    !this.props.userNotFound &&
                    !this.props.loading &&
                    <TouchableOpacity
                        style={styles.showPostsButton}
                        onPress={() => this.props.onShowPostsButtonPressed()}
                    >
                        <Text
                            style={styles.text}
                        >{'Show posts'}</Text>
                    </TouchableOpacity>
                }
                {
                    this.props.userNotFound &&
                    !this.props.loading &&
                    <Text
                        style={styles.titleText}
                    >{userNotFountMessage}</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 30,
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