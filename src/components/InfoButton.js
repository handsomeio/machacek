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
    marginRight: 10,
  },
});

class Info extends Component {
  render() {
    console.log(this.props)
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Info')}>
        <Image resizeMode='contain' source={require('../assets/Info.png')} style={styles.image}/>
      </TouchableOpacity>
    );
  }
}

export default Info;
