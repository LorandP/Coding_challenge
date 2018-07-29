import * as React from 'react'
import { User } from '../../entity/User';
import { BlogPostService } from '../../services/BlogPostService';
import { BlogPost } from '../../entity/BlogPost';
import Styles from './Styles';

export interface Props {
    navigation: any;
}
export interface State {
    loading: boolean;
}

export default class ListOfBlogPosts extends React.Component<Props, State> {
    private userID: number;
    private blogPostService: BlogPostService;
    private listOfBlogPosts: Array<BlogPost>;

    constructor(props: Props) {
        super(props);
        this.userID = 0;
        this.blogPostService = new BlogPostService();
        this.listOfBlogPosts = new Array<BlogPost>();
        this.state = {
            loading: true
        }
    }

    async componentDidMount() {
        try {
            this.userID = this.props.navigation.state.params.userID;
            this.listOfBlogPosts = await this.blogPostService.retrieveListOfPosts(this.userID);
            this.setState({...this.state, loading: false})
        } catch (error) {
            console.log('List of blog post -- ', error);
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
        this.props.navigation.navigate('Article', {blogPost})
    }


    /**
     * Navigates to the create article page
     *
     * @private
     * @memberof ListOfBlogPosts
     */
    private navigateToCreateArticle() {
        this.props.navigation.navigate('CreateArticle', {userId: this.userID});
    }

    render() {
        return (
            <Styles
            listOfBlogPosts={this.listOfBlogPosts}
            loading={this.state.loading}
            onCardPressed={(blogPost) => this.navigateToBlogPost(blogPost)}
            onShowCreatePostButtonPressed={() => this.navigateToCreateArticle()}
            />
        );
    }
}
