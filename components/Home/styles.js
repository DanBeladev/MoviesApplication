import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  homeDiv: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 35,

    alignItems: 'center',

    backgroundColor: '#000',
  },
  homePageImage: {
    width: '100%',
    height: '50%',
  },
  action: {
    borderWidth: 5,
    borderColor: 'orange',
    borderRadius: 50,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: 250,
    height: 70,
  },
  n: {
    fontSize: 20,
    marginTop: 20,
    width: 150,
    height: 100,
    color: 'orange',
    backgroundColor: 'transparent',
    textAlign: 'center',
    alignItems: 'center',
    maxHeight: 45,
  },
  header: {
    fontSize: 30,
    color: 'orange',
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'Heiti SC',
      },
      android: {
        fontFamily: 'monospace',
      },
    }),
  },
});
export default styles;
