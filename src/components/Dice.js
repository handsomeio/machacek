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

import { getRandomNumber } from '../lib/numberGenerator';

class Dice extends Component {
  constructor(props) {
    super(props);

    this.spinValue = new Animated.Value(0);
  }

  spin = (duration) => {
    this.spinValue.setValue(0);
const b = duration;
    const a =  b/2 * 500;
    Animated.timing(
      this.spinValue,
      {
        toValue: b,
        duration: a,
        easing: Easing.linear
      }
    ).start()
  }

  componentWillReceiveProps(nextProps) {
    this.spin(nextProps.duration)
    console.log(nextProps)
  }

  getImage(number) {
    switch(number) {
      case 1:
        return require('../assets/1.png');
      break;
      case 2:
        return require('../assets/2.png');
      break;
      case 3:
        return require('../assets/3.png');
      break;
      case 4:
        return require('../assets/4.png');
      break;
      case 5:
        return require('../assets/5.png');
      break;
      case 6:
        return require('../assets/6.png');
      break;
    }
  }

  render() {
    const { duration } = this.props;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const a = this.getImage(duration);
    return (
      <View>
        <Animated.Image
          style={{ width: 100, height: 100, transform: [{rotate: spin}] }}
          source={a}
        />
      </View>
    );
  }
}

export default Dice;

