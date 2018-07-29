import * as React from 'react'
import { User } from '../../entity/User';
import Styles from './Styles';
export interface Props {
    navigation: any;
}
export interface State {}

export default class Welcome extends React.Component<Props, State> {
    private user: User;
    constructor(props: Props) {
        super(props);
        this.user = new User();
        this.state = {}
    }

    componentDidMount() {
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
    private setUserDetails() {
        this.user.setId(1);
        this.user.setName('Leanne Graham');
        this.user.setCity('Gwenborough');
        this.user.setStreet('Kulas Light');
    }

    render() {
        return (
            <Styles
            name={this.user.getName()}
            city={this.user.getCity()}
            street={this.user.getStreet()}
            onShowPostsButtonPressed={() => this.navigateToListOfBlogPosts()}
            />
        );
    }
}