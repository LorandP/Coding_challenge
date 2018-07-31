import * as React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { WHITE, BLACK } from '../../config/colors';

const ARTICLE_IMAGE = require('../../../assets/article_image_wide.png');

export interface Props {
    title: string;
    body: string;
}
export interface State { }

export default class Styles extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ScrollView
            contentContainerStyle={styles.container}
            >
                <Text
                    style={styles.title}
                >{this.props.title}</Text>
                <View
                    style={{ backgroundColor: WHITE, width: 350, alignSelf: 'center' }}
                >
                    <Image
                        source={ARTICLE_IMAGE}
                        style={styles.image}
                    />
                </View>

                <Text
                    style={styles.body}
                >{this.props.body + this.props.body + this.props.body + '\n\n' + 
                this.props.body + this.props.body + this.props.body}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'column',
        padding: 20
    },
    title: {
        fontSize: 25,
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: BLACK,
        marginTop: 20
    },
    body: {
        fontSize: 17,
        textAlign: 'justify',
        marginTop: 20
    },
    image: {
        marginTop: 30,
        resizeMode: 'contain'
    }
});