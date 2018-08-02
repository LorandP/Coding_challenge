import * as React from 'react'
import { StyleSheet,  View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { TRANSPARENT } from '../config/colors';

export interface Props {
    onSplahScreenLoadFinish: () => void;
}
export interface State {}

export default class Splashscreen extends React.Component<Props, State> {
    private timer: any;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        console.log('Splash screen');
        this.timer = setTimeout(async() => {
            console.log('In ntimer');
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