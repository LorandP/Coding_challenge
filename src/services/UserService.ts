import * as React from 'react'
import { User } from '../entity/User';

export interface Props {}
export interface State {}

export class UserService extends React.Component<Props, State> {
    

    /**
     * Fetches details of a user and returns a User object
     *
     * @param {string} userID to be retrieved
     * @returns {Promise<User>}
     * @memberof UserService
     */
    async userDetails(userID: string): Promise<User> {
        let response;
        let responseJson;

        try {
            response = fetch(USER_URL + userID, {
                
            })
        } catch (error) {
            
        }
    }
}
