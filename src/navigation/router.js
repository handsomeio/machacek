import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import I18n from 'react-native-i18n';

import GameScreen from '../screens/Game';
import InfoScreen from '../screens/Info';
import InfoButton from '../components/InfoButton';

export const AppStack = StackNavigator({
  Game: {
    screen: GameScreen,
    navigationOptions: ({ navigation }) => ({
      title: I18n.t('screens.game.title'),
      headerRight: <InfoButton navigation={navigation} />,
    }),
  },
  Info: {
    screen: InfoScreen,
    navigationOptions: () => ({
      title: I18n.t('screens.info.title'),
    }),
  },
}, {
  navigationOptions: {
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#673ab7',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
  },
});
