
import * as React from 'react'
import { StyleSheet } from 'react-native';
import Styles from './Styles';

export interface Props { }
export interface State { }

export default class CreateArticle extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Styles/>
        );
    }
}

const styles = StyleSheet.create({

});