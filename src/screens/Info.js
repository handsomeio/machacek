import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Swiper from 'react-native-swiper';
import I18n from 'react-native-i18n';

var styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 35,
    paddingVertical: 15,
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    width: 100,
    height: 100,
  }
});

class Info extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} activeDotColor="#673AB7">
        <View style={styles.slide}>
          <Text style={styles.text}>{I18n.t('rules.firstTitle')}</Text>
          <Text style={styles.description}>{I18n.t('rules.firstDetailA')}</Text>
          <Text style={styles.description}>{I18n.t('rules.firstDetailB')}</Text>
          <Text style={styles.description}>{I18n.t('rules.firstDetailC')}</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>{I18n.t('rules.secondTitle')}</Text>
          <Text style={styles.description}>{I18n.t('rules.secondDetailA')}</Text>
          <Text style={styles.description}>{I18n.t('rules.secondDetailB')}</Text>
          <Text style={styles.description}>{I18n.t('rules.secondDetailC')}</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>{I18n.t('rules.thirdTitle')}</Text>
          <Text style={styles.description}>{I18n.t('rules.thirdDetailA')}</Text>
        </View>
      </Swiper>
    );
  }
}

export default Info;
