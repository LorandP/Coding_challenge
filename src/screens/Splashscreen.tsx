import * as React from 'react'
import { StyleSheet,  View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { TRANSPARENT } from '../config/colors';

export interface Props {
    onSplahScreenLoadFinish: () => void;
}
export interface State {}


/**
 * A class that represents a Splash screen
 *
 * @export
 * @class Splashscreen
 * @extends {React.Component<Props, State>}
 */
export default class Splashscreen extends React.Component<Props, State> {
    private timer: any;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.timer = setTimeout(async() => {
            SplashScreen.hide();
            this.props.onSplahScreenLoadFinish();
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
      }

    render() {
        return (
            <View style={{ backgroundColor: TRANSPARENT }}>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});