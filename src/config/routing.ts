import { StackNavigator } from 'react-navigation';
import { Welcome } from '../screens/Welcome';
import { GRAY, GREEN } from './colors';

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

const homeStackNavigator = StackNavigator ({
    Welcome: {
        screens: Welcome
    }},
    {
        headerMode: 'float',
        headerTintColor: GREEN,
        cardStyle: {
            backgroundColor: 'white'
        },
        headerStyle
    }
)