import React, { Component } from 'react';
import {
  AppState,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
}
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob' from 'react-native';

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
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#673ab7',
    paddingVertical: 10,
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop:-50
  },
  imageTextWrap: {
    backgroundColor: 'rgba(0,0,0,0)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,0)',
    transform: [{ rotate: '-30deg'}],
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

  componentDidMount() {
    RNShakeEvent.addEventListener('shake', () => {
      if (this.state.shouldHideResult) {
        this.resetGame();
      }

      this.rollDice();
    });
    // AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    // AppState.removeEventListener('change', this.handleAppStateChange);
    RNShakeEvent.removeEventListener('shake');
  }

  // handleAppStateChange = (nextAppState) => {
  //   if (nextAppState === 'background' || nextAppState === 'inactive') {
  //     RNShakeEvent.removeEventListener('shake');
  //   }
  // }

  hideResult = () => this.setState({shouldHideResult: true});
  resetGame = () => this.setState({shouldHideResult: false});

  rollDice = () => {
    const diceFirst = getRandomNumber();
    const diceSecond = getRandomNumber();

    this.setState({
      diceFirst,
      diceSecond,
      shouldHideResult: false,
    });
  }

  renderHideButton = () => {
    const { shouldHideResult } = this.state;
    if (!shouldHideResult) {
      return (
        <TouchableOpacity style={styles.button} onPress={this.hideResult}>
          <Text style={styles.label}>
            {I18n.t('game.hideResult')}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  showDices = () => {
    const { diceFirst, diceSecond, shouldHideResult } = this.state;

    if (shouldHideResult) {
      return (
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../assets/hidden.png')}
        >
        <View style={styles.imageTextWrap}>
          <Text style={styles.imageText}>
            {I18n.t('game.hiddenTitle')}
          </Text>
        </View>
        </Image>
      );
    }

    return (
      <View style={styles.gameContainer}>
        <View style={styles.diceContainer}>
          <Dice number={diceFirst}/>
        </View>
        <View style={styles.diceContainer}>
          <Dice number={diceSecond}/>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#320b86"
          barStyle="light-content"
        />
        {this.showDices()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.justDring}>
            <Text style={styles.label}>
              Call popup
            </Text>
          </TouchableOpacity>
          {this.renderHideButton()}
        </View>
        <AdMobBanner
          adSize="fullBanner"
          adUnitID="your-admob-unit-id"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        />
      </View>
    );
  }
}

export default Game;
