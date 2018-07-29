import * as React from 'react'
import { User } from '../../entity/User';
import { Styles } from './Styles';
export interface Props {}
export interface State {}

export class Welcome extends React.Component<Props, State> {
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
            />
        );
    }
}