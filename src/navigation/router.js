import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';

import GameScreen from '../screens/Game';
import InfoScreen from '../screens/Info';

export const AppStack = StackNavigator({
  Game: {
    screen: GameScreen,
    navigationOptions: () => ({
      title: 'Machacek',
      headerRight: <Text>Info</Text>,
    }),
  },
  Info: {
    screen: InfoScreen,
  },
});
