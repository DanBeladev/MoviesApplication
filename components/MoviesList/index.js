import React, { Component } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import Movie from '../Movie';
import CONSTANTS from '../../constants';
import Axios from 'axios';

export default class MoviesList extends Component {
  state = {
    search: '',
    movies: [],
    sortedData: [],
    loading: true,
  };

  componentDidMount() {
    Axios.get(CONSTANTS.API_URL)
      .then((json) => {
        const data = [...json.data.results];

        //sort by name
        // data.sort((a, b) => {
        //   if (a.title < b.title) {
        //     return -1;
        //   }
        //   if (a.title > b.title) {
        //     return 1;
        //   }
        //   return 0;
        // });

        // sort by date
        data.sort((a, b) => {
          const da = new Date(a.release_date);
          const db = new Date(b.release_date);
          if (da < db) {
            return -1;
          }
          if (da > db) {
            return 1;
          }
          return 0;
        });
        this.setState({ movies: data, sortedData: data, loading: false });
      })
      .catch((err) => console.log('error with fetch data', err));
  }

  onSearchChanged = (text) => {
    this.setState({ search: text });
    const arrayAfterFilter = [...this.state.movies].filter((item) => {
      const itemInLowerCase = item.title.toLowerCase();
      if (itemInLowerCase.includes(text.toLowerCase())) return item;
    });

    this.setState({ sortedData: arrayAfterFilter });
  };

  render() {
    return this.state.loading ? (
      <ActivityIndicator />
    ) : (
      <View style={styles.homeDiv}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.searchInput}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Search'
            onChangeText={(text) => this.onSearchChanged(text)}
            value={this.state.search}
            ref={(input) => (this.search = input)}
          />
        </View>
        <FlatList
          data={this.state.sortedData}
          renderItem={({ item }) => (
            <Movie key={item.key} data={item} { ...this.props} />
          )}
        />
      </View>
    );
  }
}
