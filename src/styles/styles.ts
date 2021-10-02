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
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxc: {
    height: 309,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxd1: {
    height: 284,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxd2: {
    height: 156,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxe: {
    height: 331,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxf: {
    height: 125,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxg: {
    height: 814,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'white'
  },

  boxh: {
    height: 155,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
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
