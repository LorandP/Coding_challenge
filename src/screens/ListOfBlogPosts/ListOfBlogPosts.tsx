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
    private user: User;
    private blogPostService: BlogPostService;
    private listOfBlogPosts: Array<BlogPost>;

    constructor(props: Props) {
        super(props);
        this.user = new User();
        this.blogPostService = new BlogPostService();
        this.listOfBlogPosts = new Array<BlogPost>();
        this.state = {
            loading: true
        }
    }

    async componentDidMount() {
        let userID = 0;
        
        try {
            userID = this.props.navigation.state.params.userID;
            this.listOfBlogPosts = await this.blogPostService.retrieveListOfPosts(userID);
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

    render() {
        return (
            <Styles
            listOfBlogPosts={this.listOfBlogPosts}
            loading={this.state.loading}
            onCardPressed={(blogPost) => this.navigateToBlogPost(blogPost)}
            />
        );
    }
}
