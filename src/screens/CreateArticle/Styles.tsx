
import * as React from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import ButtonGeneric from '../../common/ButtonGeneric';
import ErrorText from '../../common/ErrorText';
import { GREEN_LIGHT, WHITE } from '../../config/colors';


export interface Props {
    onChangeTitle: Function;
    onChangeContent: Function;
    onSaveArticle: Function;
    onTextFieldFocused: Function;
    errorMessage: string;
}
export interface State {

}

export default class Styles extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.parentContainer}>
                <KeyboardAvoidingView
                    behavior='padding'
                    contentContainerStyle={{ flex: 1 }}
                >
                    <View
                        style={{ marginTop: 20 }}
                    >
                        <Text
                            style={styles.lable}
                        >{'Add title: '}</Text>
                        <TextInput
                            onChangeText={(title) => this.props.onChangeTitle(title)}
                            style={styles.titleInput}
                            onFocus={() => this.props.onTextFieldFocused()}
                            placeholder={'My favorite story ... '}
                        />
                    </View>
                    <View
                        style={{ marginTop: 50 }}
                    >
                        <Text
                            style={styles.lable}
                        >{'Add content: '}</Text>
                        <TextInput
                            onChangeText={(content) => this.props.onChangeContent(content)}
                            style={styles.contentInput}
                            onFocus={() => this.props.onTextFieldFocused()}
                            placeholder={'Once upon a time ... '}
                        />
                    </View>
                </KeyboardAvoidingView>
                {
                    !this.props.errorMessage &&
                    <ButtonGeneric
                        buttonStyle={styles.showPostsButton}
                        textStyle={styles.text}
                        buttonText={'Save Article'}
                        onButtonPressed={() => this.props.onSaveArticle()}
                    />
                }
                {
                    this.props.errorMessage !== '' &&
                    <ErrorText
                        errorMessage={this.props.errorMessage}
                    />
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    lable: {
        fontWeight: 'bold',
        fontSize: 30
    },
    titleInput: {
        marginTop: 10,
        fontSize: 20
    },
    contentInput: {
        marginTop: 10,
        fontSize: 20,
        borderRadius: 10,
    },
    showPostsButton: {
        backgroundColor: GREEN_LIGHT,
        height: 50,
        width: 150,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        color: WHITE,
        fontSize: 18
    }
});