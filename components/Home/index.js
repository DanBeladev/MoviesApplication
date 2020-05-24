import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component {
  render() {

    const { navigation } = this.props;
    return (
      <View style={styles.homeDiv}>
        <Text style={styles.header}>Dan's Movies</Text>
        <Image
          source={{
            uri:
              'https://res.cloudinary.com/demo/image/fetch/w_300,h_300,c_fill,g_face,r_max,f_auto/https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png',
          }}
          style={styles.homePageImage}
        />
        <TouchableOpacity style={styles.action} onPress={()=> navigation.navigate('MoviesList')}>
            <Text style={styles.n}>Watch Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
