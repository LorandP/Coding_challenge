import { createStackNavigator } from 'react-navigation';
import Welcome from '../screens/Welcome/Welcome';
import ListOfBlogPosts from '../screens/ListOfBlogPosts/ListOfBlogPosts';
import Article from '../screens/Article/Article';
import CreateArticle from '../screens/CreateArticle/CreateArticle';
import { GRAY, WHITE, TRANSPARENT } from './colors';

const headerStyle = {
    shadowColor: GRAY,
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    borderBottomColor: TRANSPARENT
};



const homeStackNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: () => ({
            title: 'Welcome',
            headerBackTitle: null,
            headerStyle,
            headerTitleStyle: {
                fontFamily: 'Lato-Regular'
            }
        })
    },
    ListOfBlogPosts: {
        screen: ListOfBlogPosts,
        navigationOptions: () => ({
            title: 'Articles',
            headerBackTitle: null,
            headerStyle,
            headerTitleStyle: {
                fontFamily: 'Lato-Regular'
            }
        })
    },
    Article: {
        screen: Article
    },
    CreateArticle: {
        screen: CreateArticle,
        navigationOptions: () => ({
            title: 'Create Article',
            headerBackTitle: null,
            headerStyle,
            headerTitleStyle: {
                fontFamily: 'Lato-Regular'
            }
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