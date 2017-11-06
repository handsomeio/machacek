import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
});

class Info extends Component {
  onPress = () => this.props.navigation.navigate('Info');

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Image
          resizeMode='contain'
          source={require('../assets/info.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    );
  }
}

export default Info;
