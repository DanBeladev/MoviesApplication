import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
  movieScreen: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#000',
    flex: 1,
  },
  footer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    alignItems: 'baseline',
  },
  votesContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  votes: {
    color: 'red',
    fontSize: 20,
  },
  movieItemHeader: {
    color: 'orange',
    fontSize: 24,
  },
  movieImage: {
    backgroundColor: 'transparent',

    marginTop: 10,
    height: 400,
    width: '100%',
  },
  overview: {
    color: 'white',
    fontSize: 18,
  },
  date: {
    color: '#fff',
    fontSize: 18,
  },
});

export default styles;
