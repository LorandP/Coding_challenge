import * as React from 'react'
import { Header, Content } from 'native-base';
import { User } from '../../entity/User';
import Styles from './Styles';
import UserService from '../../services/UserService';
export interface Props {
    navigation: any;
}
export interface State {
    userNotFound: boolean;
    loading: boolean;
}

export default class Welcome extends React.Component<Props, State> {
    private user: User;
    private userService: UserService;
    static navigationOptions = {
        header: null
    }
    constructor(props: Props) {
        super(props);
        this.user = new User();
        this.userService = new UserService();
        this.state = {
            userNotFound: false,
            loading: true
        };
    }

    async componentDidMount() {
        this.setUserDetails();
    }

    /**
     * Navigates to the list of blog posts screen
     *
     * @private
     * @memberof Welcome
     */
    private navigateToListOfBlogPosts() {
       this.props.navigation.navigate('ListOfBlogPosts', {userID: this.user.getId()}) ;
    }

    /**
     * Sets the details of the user
     */
    private async setUserDetails() {
        const userID: string = '1';
        try {
            this.user = await this.userService.userDetails(userID);
            this.setState({
                ...this.state,
                loading: false
            });
        } catch (error) {
            this.setState({
                ...this.state,
                userNotFound: true,
                loading: false
            });
        }
    }

    render() {
        return (
            <Styles
            name={this.user.getName()}
            city={this.user.getCity()}
            street={this.user.getStreet()}
            onShowPostsButtonPressed={() => this.navigateToListOfBlogPosts()}
            userNotFound={this.state.userNotFound}
            loading={this.state.loading}
            />
        );
    }
}