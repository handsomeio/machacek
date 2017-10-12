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

class Dicked extends Component {
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

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View>
        <Animated.Image
          style={{ width: 100, height: 100, transform: [{rotate: spin}] }}
          source={require('../assets/dice.png')}
        />
      </View>
    );
  }
}

export default Dicked;
