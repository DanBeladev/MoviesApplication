import React, { Component } from 'react'
import {View, Text,Image} from 'react-native';
import IMAGES_URL from '../../constants'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class Movie extends Component {
IMAGES_URL= 'http://movieseries.kukaria.com/wp-content/uploads/2020/02/';
   
    render() {
   const {data, navigation} = this.props;
   const image_uri =  this.IMAGES_URL+data.poster_path;
   return(
    <TouchableOpacity
      style={{ backgroundColor: 'transparent' }}
      onPress={() => navigation.navigate('Movie', { data })}
    >
      <View style={styles.listItemContainer}>
        <Text style={styles.movieItemHeader}>{data.title}</Text>
        <Image
          source={{
            uri:
              image_uri,
          }}
          style={styles.movieImage}
        />
        <View>
        <Text style={styles.date}>{data.release_date}</Text>
        </View>
      </View>
    </TouchableOpacity>);
    }
}
