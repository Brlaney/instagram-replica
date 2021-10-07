import { Platform, StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
  },
  title: {
    fontSize: 42,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: 'white'
  },
  link: {
    fontSize: 28,
    letterSpacing: 1,
    color: '#3797F0',
    marginLeft: 45,
    marginTop: 6,
    marginBottom: 6,
  },
  linkText: {
    fontSize: 28,
    letterSpacing: 1,
    color: '#3797F0',
    marginLeft: 45,
    marginTop: 6,
    marginBottom: 6,
  }
});
