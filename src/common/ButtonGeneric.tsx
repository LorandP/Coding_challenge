import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native';

export interface Props {
    buttonStyle: any;
    textStyle: any;
    buttonText: string;
    onButtonPressed: Function;
}
export interface State {}


/**
 * A button that can be reused in the application
 *
 * @export
 * @class ButtonGeneric
 * @extends {React.Component<Props, State>}
 */
export default class ButtonGeneric extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <TouchableOpacity
            style={this.props.buttonStyle}
            onPress={() => this.props.onButtonPressed()}
        >
            <Text
                style={this.props.textStyle}
            >{this.props.buttonText}</Text>
        </TouchableOpacity>
        );
    }
}