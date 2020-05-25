import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import CONSTANTS from '../../constants';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Movie extends Component {
  render() {
    const { data, navigation } = this.props;
    return (
      <TouchableOpacity
        style={{ backgroundColor: 'transparent' }}
        onPress={() => navigation.navigate(CONSTANTS.SCREENS.MOVIE, { data })}
      >
        <View style={styles.listItemContainer}>
          <Text style={styles.movieItemHeader}>{data.title}</Text>
          <Image
            source={{
              uri: CONSTANTS.IMAGES_URL + data.poster_path,
            }}
            style={styles.movieImage}
          />
          <View>
            <Text style={styles.date}>{data.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
