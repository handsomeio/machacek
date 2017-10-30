import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
import I18n from 'react-native-i18n';

var styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 35,
    paddingVertical: 15,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    width: 100,
    height: 100,
  }
})


class Info extends Component {

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>{I18n.t('rules.firstTitle')}</Text>
          <Text style={styles.description}>{I18n.t('rules.firstDetailA')}</Text>
          {/*<Image resizeMode='contain' source={require('../assets/shake.gif')} style={styles.image}/>*/}
          <Text style={styles.description}>{I18n.t('rules.firstDetailB')}</Text>
          <Text style={styles.description}>{I18n.t('rules.firstDetailC')}</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>{I18n.t('rules.secondTitle')}</Text>
          <Text style={styles.description}>{I18n.t('rules.secondDetailA')}</Text>
          <Text style={styles.description}>{I18n.t('rules.secondDetailB')}</Text>
          <Text style={styles.description}>{I18n.t('rules.secondDetailC')}</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>{I18n.t('rules.thirdTitle')}</Text>
          <Text style={styles.description}>{I18n.t('rules.thirdDetailA')}</Text>
        </View>
      </Swiper>
    );
  }

}

export default Info;
