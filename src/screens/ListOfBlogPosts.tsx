import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { User } from '../entity/User';
import { BlogPostService } from '../services/BlogPostService';

export interface Props {
    navigation: any;
}
export interface State { }

export default class ListOfBlogPosts extends React.Component<Props, State> {
    private user: User;
    private blogPostService: BlogPostService;

    constructor(props: Props) {
        super(props);
        this.user = new User();
        this.blogPostService = new BlogPostService();
    }

    //TODO: Add loading spinner
    async componentDidMount() {
        let userID = 0;
        
        try {
            userID = this.props.navigation.state.params.userID;
            let arrayOfBlogPosts = await this.blogPostService.retrieveListOfPosts(userID);
        } catch (error) {
            console.log('List of blog post -- ', error);
        }
    }

    render() {
        return (
            <View>
                <Text>{'Blog post LIIIIIIST !!'}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});