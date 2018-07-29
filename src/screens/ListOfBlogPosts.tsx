import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { User } from '../entity/User';
import { BlogPostService } from '../services/BlogPostService';

export interface Props { }
export interface State { }

export default class ListOfBlogPosts extends React.Component<Props, State> {
    private user: User;
    private blogPostService: BlogPostService;

    constructor(props: Props) {
        super(props);
        this.user = new User();
        this.blogPostService = new BlogPostService();
    }

    async componentDidMount() {
        let userID = 0;
        try {
            userID = this.user.getId();
            await this.blogPostService.retrieveListOfPosts(userID);
        } catch (error) {
            console.log('User has not been found');
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