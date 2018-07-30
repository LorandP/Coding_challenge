
import * as React from 'react'
import { StyleSheet } from 'react-native';
import Styles from './Styles';
import Article from '../../entity/Article';

export interface Props { 
    navigation: any;
}
export interface State { 
    title: string;
    content: string;
    errorMessage: string;
}

export default class CreateArticle extends React.Component<Props, State> {
    private userId: number;
    private article: Article;

    constructor(props: Props) {
        super(props);
        this.article = new Article();
        this.state = {
            title: '',
            content: '',
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.userId = this.props.navigation.state.params.userId;
    }

    
    /**
     * Verifies if all fields have been filled out.
     * Creats an article and sends it to the backend.
     *
     * @private
     * @memberof CreateArticle
     */
    private saveArticle = () => {
        console.log('save article ----- ', this.state.title);
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
            this.article.setTite(this.state.title);
            this.article.setContent(this.state.content);
            this.article.setUserId(this.userId);
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