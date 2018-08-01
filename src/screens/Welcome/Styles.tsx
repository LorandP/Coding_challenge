import * as React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import ButtonGeneric from '../../common/ButtonGeneric';
import { GREEN_LIGHT, WHITE, GREEN, GRAY } from '../../config/colors';


const PROFILE_PICTURE = require('../../../assets/profile_picture.png');

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
        const greetingMessage = 'Hello ';
        const welcomeMessage = 'Welcome back!';
        const questionMessage = 'Are you still living in ';

        const userNotFountMessage = 'User has not been found. Please try again later';
        return (
            <View style={styles.container}>
                {
                    this.props.loading &&
                    <ActivityIndicator
                        size='large'
                        color={GREEN}
                        style={{ alignSelf: 'center' }}
                    />
                }
        
                {
                    !this.props.userNotFound &&
                    !this.props.loading &&
                    <View
                    style={styles.viewsContainer}
                    >
                        <View
                            style={styles.imageContainer}
                        >
                            <Image
                                source={PROFILE_PICTURE}
                                style={styles.profilePicture}
                            />
                        </View>
                        <View
                            style={styles.textAndButtonContainer}
                        >
                            <Text
                                style={styles.titleText}
                            >{greetingMessage}</Text>
                            <Text
                                style={styles.userDataText}
                            >{this.props.name}</Text>
                            <Text
                                style={styles.titleText}
                            >{welcomeMessage}</Text>
                            <Text
                                style={styles.titleText}
                            >{questionMessage}</Text>
                            <Text
                                style={styles.userDataText}
                            >{this.props.city + ', ' + this.props.street + ' ?'}</Text>

                            <ButtonGeneric
                                buttonStyle={styles.showPostsButton}
                                textStyle={styles.text}
                                buttonText={'Show Articles'}
                                onButtonPressed={() => this.props.onShowPostsButtonPressed()}
                            />
                        </View>
                    </View>
                }
                {
                    !this.props.userNotFound &&
                    !this.props.loading &&
                    <View style={{backgroundColor: GREEN_LIGHT, flex: 1}}/>
                }
                {
                    !this.props.userNotFound &&
                    !this.props.loading &&
                    <View style={{backgroundColor: WHITE, flex: 0.5}}/>
                }

                {
                    this.props.userNotFound &&
                    !this.props.loading &&
                    <View>
                        <Text
                            style={styles.titleText}
                        >{userNotFountMessage}</Text>
                    </View>

                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    showPostsButton: {
        backgroundColor: GREEN_LIGHT,
        height: 50,
        width: 200,
        marginTop: 30,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: WHITE,
        fontSize: 18,
        fontFamily: 'Lato-Regular'
    },
    titleText: {
        color: GREEN_LIGHT,
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Lato-Regular'
    },
    userDataText: {
        color: GREEN,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Lato-Bold'
    },
    textAndButtonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10,
        paddingTop: 70,
        elevation: 5,
        shadowColor: GRAY,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 5,
        shadowRadius: 5,
        backgroundColor: WHITE
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    imageContainer: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        backgroundColor: WHITE,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: GRAY,
        shadowOpacity: 5,
        shadowRadius: 5,
        position: 'absolute',
        top: 0,
        zIndex: 2,
        alignSelf: 'center'
    },
    
    viewsContainer: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 370,
        padding: 10,
        bottom: 50,
        zIndex: 5,
        alignSelf: 'center'
    }
});