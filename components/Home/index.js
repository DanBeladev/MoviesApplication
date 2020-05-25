import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CONSTANTS from '../../constants'

export default class Home extends Component {
  render() {

    const { navigation } = this.props;
    return (
      <View style={styles.homeDiv}>
        <Text style={styles.header}>Dan's Movies</Text>
        <Image
          source={{
            uri:
              CONSTANTS.HOME_IMAGE,
          }}
          style={styles.homePageImage}
        />
        <TouchableOpacity style={styles.action} onPress={()=> navigation.navigate(CONSTANTS.SCREENS.MOVIES_LIST)}>
            <Text style={styles.n}>Watch Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
