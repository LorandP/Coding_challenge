import * as React from 'react'
import { View } from 'react-native';
import { HomeStackNavigator } from './config/routing';


export interface Props { }
export interface State { }

export class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HomeStackNavigator/>
      </View>
    );
  }
}