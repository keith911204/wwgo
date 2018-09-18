import React, {Component} from 'react';
import { Text } from 'react-native';
import RootNavigation from './navigation/RootNavigation';
console.disableYellowBox = true;
Text.allowFontScaling = false;


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootNavigation/>
    );
  }
}

