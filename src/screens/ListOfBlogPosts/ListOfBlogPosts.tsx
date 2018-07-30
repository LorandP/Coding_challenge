import * as React from 'react'
import { User } from '../../entity/User';
import BlogPostService from '../../services/BlogPostService';
import BlogPost from '../../entity/BlogPost';
import Styles from './Styles';
import { AppState } from '../../../node_modules/@types/react-native';

export interface Props {
    navigation: any;
}
export interface State {
    loading: boolean;
    listOfBlogPosts: Array<BlogPost>;
    errorMesage: string;
}

export default class ListOfBlogPosts extends React.Component<Props, State> {
    private userID: number;
    private blogPostService: BlogPostService;
    private didFocusListener: any;

    constructor(props: Props) {
        super(props);
        this.userID = 0;
        this.blogPostService = new BlogPostService();
        this.state = {
            loading: true,
            listOfBlogPosts: [],
            errorMesage: ''
        }
    }

    async componentDidMount() {
        try {
            this.userID = this.props.navigation.state.params.userID;
            let listOfBlogPosts = await this.blogPostService.retrieveListOfPosts(this.userID);
            this.setState({
                ...this.state,
                listOfBlogPosts
            });
            this.didFocusListener = this.props.navigation.addListener('didFocus', () => {
                this.setState({
                    ...this.state,
                    loading: false
                });
            });
        } catch (error) {
            this.setState({
                ...this.state,
                errorMesage: 'Could not retrieve the list of blog posts. Please try again later'
            });
        }
    }

    componentWillUnmount() {
        if (this.didFocusListener) {
            this.didFocusListener.remove();
        }
    }

    /**
     * Navigates to blog post screen after a card has been tapped
     * 
     * @private
     * @param {BlogPost} blogPost to navigate to
     * @memberof ListOfBlogPosts
     */
    private navigateToBlogPost(blogPost: BlogPost) {
        this.props.navigation.navigate('Article', { blogPost })
    }


    /**
     * Navigates to the create article page
     *
     * @private
     * @memberof ListOfBlogPosts
     */
    private navigateToCreateArticle() {
        this.props.navigation.navigate('CreateArticle', {
            userId: this.userID,
            listOfArticles: this.state.listOfBlogPosts
        });
        this.setState({
            ...this.state,
            loading: true
        });
    }

    render() {
        return (
            <Styles
                listOfBlogPosts={this.state.listOfBlogPosts}
                loading={this.state.loading}
                onCardPressed={(blogPost) => this.navigateToBlogPost(blogPost)}
                onShowCreatePostButtonPressed={() => this.navigateToCreateArticle()}
                errorMessage={this.state.errorMesage}
            />
        );
    }
}
