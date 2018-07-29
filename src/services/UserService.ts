import { User } from '../entity/User';
import { USER_URL, JSON_HEADER } from '../config/server';

export default class UserService {
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
        const errorMessage = 'Unknown error. Please try again later.';
        try {
            response = await fetch(USER_URL + userID, {
                method: 'GET',
                headers: JSON_HEADER
            });
            responseJson = await response.json();
        } catch (error) {
            return Promise.reject(errorMessage);
        }
        if (response.status === 200) {
            let selectedUser = new User();
            selectedUser.setId(responseJson.id);
            selectedUser.setName(responseJson.name);
            selectedUser.setCity(responseJson.address.city);
            selectedUser.setStreet(responseJson.address.street);

            return selectedUser;
        } else {
            return Promise.reject(errorMessage);
        }
    }
}
