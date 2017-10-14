import React, { Component } from 'react';
import {
  Animated,
  Easing,
  Image,
  InputField,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';

import Dice from '../components/Dice';
import RNShakeEvent from 'react-native-shake-event';
import { getRandomNumber } from '../lib/numberGenerator';

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

  rollDice = () => {
    const diceFirst = getRandomNumber();
    const diceSecond = getRandomNumber();

    this.setState({
      diceFirst,
      diceSecond,
    });
  }

  diceResult = () => {
    const { diceFirst, diceSecond } = this.state;

    return (diceFirst > diceSecond)
      ? 10 * diceFirst + diceSecond
      : 10 * diceSecond + diceFirst;
  }


  render() {
    const { diceFirst, diceSecond } = this.state;

    return (
      <View>
        <View>
          <Text>{diceFirst}</Text>
        </View>
        <View>
          <Text>{diceSecond}</Text>
        </View>
        <TouchableOpacity onPress={this.rollDice}>
          <Text>
            Role Dice
          </Text>
        </TouchableOpacity>
        <Text>{this.diceResult()}</Text>
        <Dice duration={diceFirst} />
        <Dice duration={diceSecond} />
      </View>
    );
  }
}

export default Game;
