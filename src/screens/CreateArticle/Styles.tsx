
import * as React from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

export interface Props { }
export interface State { }

export default class Styles extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

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
                            style={styles.titleInput}
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
                            style={styles.contentInput}
                            placeholder={'Once upon a time ... '}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        padding: 30,
        flexDirection: 'column'
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
    }
});