import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';

import I18n from 'react-native-i18n';
import RNShakeEvent from 'react-native-shake-event';
import TimerMixin from 'react-timer-mixin';

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
    marginHorizontal: 15,
    marginVertical: 30,
  },
  button: {
    backgroundColor: '#673AB7',
    paddingVertical: 10,
    marginBottom: 10,
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
});

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diceFirst: 2,
      diceSecond: 1,
      shouldHideResult: false,
    };
  }


  componentWillMount() {
    RNShakeEvent.addEventListener('shake', () => {
      if (this.state.shouldHideResult) {
        this.resetGame();
      }

      this.rollDice();
    });
  }

  componentWillUnmount() {
    RNShakeEvent.removeEventListener('shake');
  }

  mixins: [TimerMixin];

  hideResult = () => {
    this.setState({ shouldHideResult: true });
  }

  resetGame = () => this.setState({ shouldHideResult: false });

  runGame = () => {
      if (this.state.shouldHideResult) {
        this.resetGame();
      }

      this.rollDice();
  }

  rollDice = () => {
    const diceFirst = getRandomNumber();
    const diceSecond = getRandomNumber();

    this.setState({
      diceFirst,
      diceSecond,
    });
  }

  renderDice = (dice) => {
    const { shouldHideResult } = this.state;

    return <Dice shouldHideResult={shouldHideResult} duration={dice} />
  }

  render() {
    const { diceFirst, diceSecond } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.gameContainer}>
          <View style={styles.diceContainer}>
            {this.renderDice(diceFirst)}
          </View>
          <View style={styles.diceContainer}>
            {this.renderDice(diceSecond)}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.hideResult}>
            <Text style={styles.label}>
              {I18n.t('game.hideResult').toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.runGame}>
            <Text style={styles.label}>
              Role Dice
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Game;
