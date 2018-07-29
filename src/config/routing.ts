import { createStackNavigator } from 'react-navigation';
import Welcome from '../screens/Welcome/Welcome';
import ListOfBlogPosts from '../screens/ListOfBlogPosts';
import { GRAY, GREEN, WHITE } from './colors';

const headerStyle = {
    shadowColor: GRAY,
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    borderBottomColor: 'transparent'
};



const homeStackNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: () => ({
            title: 'Welcome',
            headerTintColor: GREEN,
            headerBackTitle: null,
            headerStyle
        })
    },
    ListOfBlogPosts: {
        screen: ListOfBlogPosts,
        navigationOptions: () => ({
            title: 'Blog posts',
            headerBackTitle: null,
            headerTintColor: GREEN,
            headerStyle
        })
    }
},
    {
        headerMode: 'float',
        cardStyle: {
            backgroundColor: WHITE
        },
        headerStyle
    }
)

export { homeStackNavigator as HomeStackNavigator }