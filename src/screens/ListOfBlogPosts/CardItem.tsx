import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { GREEN_LIGHT, BLACK } from '../../config/colors';

const CARD_IMAGE = require('../../../assets/card_image.png');
export interface Props {
    style: any;
    title: string;
    content: string,
    onCardPressed: Function;
}
export interface State { }


/**
 * A single Card item shown in the list of articles
 *
 * @export
 * @class CardItem
 * @extends {React.Component<Props, State>}
 */
export default class CardItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (

            <TouchableOpacity
                style={this.props.style}
                onPress={() => this.props.onCardPressed()}
            >
                <View
                    style={styles.imageAndTextContainer}
                >
                    <Image
                        source={CARD_IMAGE}
                        style={styles.image}
                    />
                    <View
                    style={styles.textContainer}
                    >
                        <Text
                            style={styles.title}
                        >{this.props.title}</Text>
                        <Text
                            style={styles.content}
                            numberOfLines={3}
                        >{this.props.content}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    topView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: GREEN_LIGHT
    },
    imageAndTextContainer: {
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 5,
        flexDirection: 'row'
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 14,
        textAlign: 'left',
        fontFamily: 'Lato-Bold',
        color: BLACK
    },
    content: {
        fontSize: 12,
        textAlign: 'left',
        fontFamily: 'Lato-Light',
        marginTop: 5
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'stretch',
        borderRadius: 10
    }
});