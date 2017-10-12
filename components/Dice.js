import React, { Component } from 'react';
import {
  Vibration,
Animated,
  InputField,
  StyleSheet,
Easing,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import RNShakeEvent from 'react-native-shake-event';
import Dicked from './Dicked';
import { getRandomNumber } from '../lib/numberGenerator';

class Dice extends Component {
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
        <Dicked duration={diceFirst} />
        <Dicked duration={diceSecond} />
      </View>
    );
  }
}

export default Dice;
