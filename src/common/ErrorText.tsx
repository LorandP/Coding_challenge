import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ERROR } from '../config/colors';

export interface Props {
    errorMessage: string;
}
export interface State { }

export default class ErrorText extends React.Component<Props, State> {
    render() {
        return (
            <Text
                style={styles.errorMessage}
            >{this.props.errorMessage}</Text>
        );
    }
}

const styles = StyleSheet.create({
    errorMessage: {
        color: ERROR,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});