
import * as React from 'react'
import { StyleSheet } from 'react-native';
import Styles from './Styles';
import BlogPost from '../../entity/BlogPost';
import BlogPostService from '../../services/BlogPostService';

export interface Props {
    navigation: any;
}
export interface State {
    title: string;
    content: string;
    errorMessage: string;
}


/**
 * Screen that hadnles the creation of an article
 *
 * @export
 * @class CreateArticle
 * @extends {React.Component<Props, State>}
 */
export default class CreateArticle extends React.Component<Props, State> {
    private userId: number;
    private blogPost: BlogPost;
    private blogPostService: BlogPostService;
    private existingListOfArticles: Array<BlogPost>;

    constructor(props: Props) {
        super(props);
        this.blogPost = new BlogPost();
        this.blogPostService = new BlogPostService();
        this.existingListOfArticles = new Array<BlogPost>();
        this.state = {
            title: '',
            content: '',
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.userId = this.props.navigation.state.params.userId;
        this.existingListOfArticles = this.props.navigation.state.params.listOfArticles;
    }


    /**
     * Verifies if all fields have been filled out.
     * Creats an article and sends it to the backend.
     *
     * @private
     * @memberof CreateArticle
     */
    private saveArticle = async () => {
        if (!this.state.title) {
            this.setState({
                ...this.state,
                errorMessage: 'Title cannot be empty. Please add a title'
            });
        } else if (!this.state.content) {
            this.setState({
                ...this.state,
                errorMessage: 'Content cannot be empty. Please add some content'
            });
        } else {
            this.blogPost.setTitle(this.state.title);
            this.blogPost.setBody(this.state.content);
            this.blogPost.setUserId(this.userId);
            this.postBlogPost();
        }
    }


    /**
     * Posts the newly created article to the backend and saves it to the already existing list of articles.
     * If succesfull, nvigates to the list of blog posts screen.
     *
     * @private
     * @memberof CreateArticle
     */
    private async postBlogPost() {
        try {
            let newListOfBlogPosts = await this.blogPostService.postBlogPost(this.existingListOfArticles, this.blogPost);
            this.props.navigation.navigate('ListOfBlogPosts', { newListOfBlogPosts });
        } catch (error) {
            this.setState({
                errorMessage: 'Could not uploade your article. Please try again later'
            });
        }
    }

    /**
     * Changes the state of the title with the one set by the user
     *
     * @private
     * @memberof Styles
     */
    private changeTitle = (title: string) => {
        this.setState({
            ...this.state,
            title
        })
    }


    /**
     * Changes the state of content with what was set by the user
     * 
     * @private
     * @memberof Styles
     */
    private changeContent = (content: string) => {
        this.setState({
            ...this.state,
            content
        })
    }


    /**
     * Clears the error message from state
     *
     * @private
     * @memberof CreateArticle
     */
    private textFieldFocused = () => {
        if (this.state.errorMessage) {
            this.setState({
                ...this.state,
                errorMessage: ''
            });
        }
    }

    render() {
        return (
            <Styles
                onChangeTitle={(title) => this.changeTitle(title)}
                onChangeContent={(content) => this.changeContent(content)}
                onSaveArticle={() => this.saveArticle()}
                errorMessage={this.state.errorMessage}
                onTextFieldFocused={() => this.textFieldFocused()}
            />
        );
    }
}

const styles = StyleSheet.create({

});