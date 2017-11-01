import React, { Component } from 'react';
import {
  Alert,
  Image,
  StatusBar,
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
    marginHorizontal: 15,
    marginVertical: 30,
    height: 50,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#673AB7',
    paddingVertical: 10,
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

  hideResult = () => this.setState({ shouldHideResult: true });
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
      shouldHideResult: false,
    });
  }

  diceResult = () => {
    const { diceFirst, diceSecond } = this.state;
    const result = (diceFirst > diceSecond)
      ? 10 * diceFirst + diceSecond
      : 10 * diceSecond + diceFirst;

    if (result === 21 || result === 31 || result === 32) {
      return this.justDring(result);
    }

    return null;
  }


  justDring = (result) => Alert.alert(
    'Alert Title',
    `${result}`,
    [
      {text: 'OK', onPress: () => console.log('OK Pressed!')},
    ]
  );

  renderButton = () => {
    if(!this.state.shouldHideResult) {
      return (
        <TouchableOpacity style={styles.button} onPress={this.hideResult}>
          <Text style={styles.label}>
            {I18n.t('game.hideResult').toUpperCase()}
          </Text>
        </TouchableOpacity>
      )
    }
  }


  render() {
    const { diceFirst, diceSecond, shouldHideResult } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#4527A0"
          barStyle="light-content"
        />
        <View style={styles.gameContainer}>
          <View style={styles.diceContainer}>
            <Dice shouldHideResult={shouldHideResult} duration={diceFirst} />
          </View>
          <View style={styles.diceContainer}>
            <Dice shouldHideResult={shouldHideResult} duration={diceSecond} />
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
          <TouchableOpacity onPress={this.justDring}>
            <Text style={styles.label}>
              Call popup
            </Text>
          </TouchableOpacity>
          {this.diceResult()}
        {this.renderButton()}
        </View>
      </View>
    );
  }
}

export default Game;
