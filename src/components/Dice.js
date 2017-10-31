import React, {Component} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
} from 'react-native';

import {getImage} from '../lib/getImage';
import {getRandomNumber} from '../lib/numberGenerator';

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});

class Dice extends Component {
  constructor(props) {
    super(props);

    this.spinValue = new Animated.Value(0);
  }

  componentWillReceiveProps(nextProps) {
    this.spin(nextProps.duration);
  }

  spin = (value) => {
    const duration = value / 2 * 500;
    this.spinValue.setValue(0);

    Animated.timing(
      this.spinValue,
      {
        toValue: value,
        duration: duration,
        easing: Easing.linear
      }
    ).start();
  }

  render() {
    const {duration} = this.props;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      (this.props.shouldHideResult)
        ? <Image style={styles.image} source={require('../assets/6.png')}/>
        : <Animated.Image
        style={[styles.image, {transform: [{rotate: spin}]}]}
        source={getImage(duration)}
      />
    );
  }
}

export default Dice;
