import * as React from 'react'
import BlogPost from '../../entity/BlogPost';
import Styles from './Styles';

export interface Props {
    navigation: any;
}
export interface State {
    title: string;
    body: string;
}


/**
 * Screen that shows an article
 *
 * @export
 * @class Article
 * @extends {React.Component<Props, State>}
 */
export default class Article extends React.Component<Props, State> {
    private blogPost: BlogPost;
    /**
     * We style the header when it renders and we provide the title
     * which is going to be the article id.
     *
     * @static
     * @memberof BlogPost
     */
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Blog ' + navigation.state.params.blogPost.getId(),
            headerBackTitle: null,
            headerTitleStyle: {
                fontFamily: 'Lato-Regular'
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
            <Styles
            title={this.state.title}
            body={this.state.body}
            />
        );
    }
}