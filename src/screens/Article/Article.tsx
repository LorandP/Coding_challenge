import * as React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import BlogPost from '../../entity/BlogPost';
import { GREEN } from '../../config/colors';

export interface Props {
    navigation: any;
}
export interface State {
    title: string;
    body: string;
}

export default class Article extends React.Component<Props, State> {
    private blogPost: BlogPost;
    /**
     * We style the header when it renders and we provide the title
     * which is going to be the article id.
     *
     * @static
     * @memberof BlogPost
     */
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Blog ' + navigation.state.params.blogPost.getId(),
            headerBackTitle: null,
            headerTintColor: GREEN,
            headerTitleStyle: {
                fontFamily: 'Laton-Regular'
            }
        }
    }
    
    constructor(props: Props) {
        super(props);
        this.blogPost = new BlogPost();
        this.state = {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        this.blogPost = this.props.navigation.state.params.blogPost;
        this.setState({
            ...this.state,
            title: this.blogPost.getId() ? this.blogPost.getTitle().toString() : '',
            body: this.blogPost.getBody() ? this.blogPost.getBody().toString() : ''
        });
    }

    render() {
        return (
            <View style={styles.container}>
            <Text
            style={styles.title}
            >{this.state.title}</Text>
            <Text
            style={styles.body}
            >{this.state.body}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20
    },
    title: {
        fontSize: 25,
        fontFamily: 'Laton-Bold',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    body: {
        fontSize: 17,
        textAlign: 'justify',
        letterSpacing: 1,
        marginTop: 50
    }
});