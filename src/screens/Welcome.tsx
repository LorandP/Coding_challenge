import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { User } from '../entity/User';
import { GREEN_LIGHT, WHITE, GREEN } from '../config/colors';
export interface Props {}
export interface State {}

export class Welcome extends React.Component<Props, State> {
    private user: User;
    constructor(props: Props) {
        super(props);
        this.user = new User();
        this.state = {}
    }

    componentDidMount() {
        this.setUserDetails();
    }

    /**
     * Sets the details of the user
     */
    private setUserDetails() {
        this.user.setId(1);
        this.user.setName('Leanne Graham');
        this.user.setCity('Gwenborough');
        this.user.setStreet('Kulas Light');
    }

    render() {
        const greetingMessage = 'Hello ' + this.user.getName() + '. Welcome back!' + '\n' +
                                'Are you still living in ' + this.user.getCity() + ', ' + this.user.getStreet() + ' ?';
        return (
            <View style={styles.container}>
                <Text
                style={styles.titleText}
                >{greetingMessage}</Text>
                <TouchableOpacity
                style={styles.showPostsButton}
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