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
  slideWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 25,
    paddingVertical: 15,
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginBottom: 15,
  },
  descriptionWrapper: {
    flexDirection: 'row',
  },
  description: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Roboto',
    marginBottom: 5,
    lineHeight: 24,
  },
  bullet: {
    fontSize: 30,
    marginRight: 10,
    color: '#000000',
    lineHeight: 24,
  },
  bestCombination: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  otherCombination: {
    flexDirection: 'row',
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  shakeImage: {
    width: 120,
    height: 120,
  },
});

class Info extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} activeDotColor="#673AB7">
        <View style={styles.slideWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.shakeImage}
              source={require('../assets/shake.png')}
              resizeMode='contain'
            />
          </View>
          <Text style={styles.title}>{I18n.t('info.firstSlide.title')}</Text>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.description}>
              {I18n.t('info.firstSlide.descriptionA')}
            </Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.description}>{I18n.t('info.firstSlide.descriptionB')}</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.description}>{I18n.t('info.firstSlide.descriptionC')}</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.description}>{I18n.t('info.firstSlide.descriptionD')}</Text>
          </View>
        </View>
        <View style={styles.slideWrapper}>
          <Text style={styles.title}>{I18n.t('info.secondSlide.title')}</Text>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.description}>{I18n.t('info.secondSlide.descriptionA')}</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.description}>{I18n.t('info.secondSlide.descriptionB')}</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.description}>{I18n.t('info.secondSlide.descriptionC')}</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.bullet}>{'\u2022'}</Text>
            <Text style={styles.description}>{I18n.t('info.secondSlide.descriptionD')}</Text>
          </View>
        </View>
        <View style={styles.slideWrapper}>
          <Text style={styles.title}>{I18n.t('info.thirdSlide.title')}</Text>
          <View>
            <View style={styles.bestCombination}>
              <Text style={styles.description}>{I18n.t('info.thirdSlide.descriptionA')}</Text>
            </View>
            <View style={styles.otherCombination}>
              <Text style={[styles.description, {flex: 1}]}>{I18n.t('info.thirdSlide.descriptionB')}</Text>
              <Text style={[styles.description, {flex: 1}]}>{I18n.t('info.thirdSlide.descriptionC')}</Text>
              <Text style={[styles.description, {flex: 1}]}>{I18n.t('info.thirdSlide.descriptionD')}</Text>
              <Text style={[styles.description, {flex: 1}]}>{I18n.t('info.thirdSlide.descriptionE')}</Text>
            </View>
          </View>
        </View>
      </Swiper>
    );
  }
}

export default Info;
