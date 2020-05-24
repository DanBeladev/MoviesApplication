import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import CONSTANTS from '../../constants';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

export default class Movie extends Component {
  render() {
    const { data } = this.props.route.params;
    console.log(data);
    return (
      <View style={styles.movieScreen}>
        <Text style={styles.movieItemHeader}>{data.title}</Text>
        <Image
          source={{
            uri: CONSTANTS.IMAGES_URL + data.poster_path,
          }}
          style={styles.movieImage}
        />
        <Text style={styles.overview}>{data.overview}</Text>
        <View style={styles.footer}>
          <View style={styles.votesContainer}>
            <Icon
              raised
              name='heartbeat'
              type='font-awesome'
              color='red'
            />
            <Text style={styles.votes}>{data.vote_count}</Text>
          </View>
          <Text style={styles.date}>{data.release_date}</Text>
        </View>
      </View>
    );
  }
}
