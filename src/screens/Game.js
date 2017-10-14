import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';

import I18n from 'react-native-i18n';
import RNShakeEvent from 'react-native-shake-event';

import Dice from '../components/Dice';
import { getRandomNumber } from '../lib/numberGenerator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  gameContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  diceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1
  }
});

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diceFirst: 2,
      diceSecond: 1,
    };
  }

  componentWillMount() {
    RNShakeEvent.addEventListener('shake', () => {
      this.rollDice();
    });
  }

  componentWillUnmount() {
    RNShakeEvent.removeEventListener('shake');
  }

  hideResult = () => {}

  rollDice = () => {
    const diceFirst = getRandomNumber();
    const diceSecond = getRandomNumber();

    this.setState({
      diceFirst,
      diceSecond,
    });
  }

  render() {
    const { diceFirst, diceSecond } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.gameContainer}>
          <View style={styles.diceContainer}>
            <Dice duration={diceFirst} />
          </View>
          <View style={styles.diceContainer}>
            <Dice duration={diceSecond} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.hideResult}>
            <Text>{I18n.t('game.hideResult')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.rollDice}>
            <Text>
              Role Dice
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Game;
