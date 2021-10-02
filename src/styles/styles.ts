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

  boxa: {
    height: 157,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxb: {
    height: 105,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxc: {
    height: 309,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxd1: {
    height: 284,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxd2: {
    height: 156,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxe: {
    height: 331,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxf: {
    height: 125,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxg: {
    height: 814,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxh: {
    height: 155,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxText: {
    fontSize: 42,
    color: 'white',
    fontWeight: 'bold'
  }
});
