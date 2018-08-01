import * as React from 'react'
import { View } from 'react-native';
import { HomeStackNavigator } from './config/routing';
import SplashScreen from './screens/Splashscreen';


export interface Props { }
export interface State {
  splashScreenShow: boolean;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      splashScreenShow: false
    }
  }


  /**
   * Changes the state of splashcreen variable
   *
   * @private
   * @memberof App
   */
  private onSplahScreenLoadFinish = () => {
    this.setState({
      ...this.state,
      splashScreenShow: true
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          !this.state.splashScreenShow &&
          <SplashScreen
            onSplahScreenLoadFinish={() => this.onSplahScreenLoadFinish()}
          />
        }
        {
          this.state.splashScreenShow &&
          <HomeStackNavigator />
        }
      </View>
    );
  }
}