import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export interface Props {}
export interface State {}

export class Welcome extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

});