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
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#EF2917'
  },

  boxb: {
    height: 105,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },

  boxc: {
    height: 309,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },

  boxd1: {
    height: 284,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 2,
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
    borderWidth: 2,
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
  },

  boxf: {
    height: 125,
    width: 1170,
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },

  boxg: {
    height: 814,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },

  boxh: {
    height: 155,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },

  boxText: {
    fontSize: 42,
    color: 'white'
  },

  topNavLeftEnd: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 105,
  },

  topNavMiddle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 105,
    marginLeft: 125,
    textAlign: 'center'
  },

  topNavRightEnd: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 105,
    marginRight: 34,
  },

  statsNavLeftEnd: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 309,
  },

  postsNavLeft: {
    minWidth: 388,
    maxWidth: 388,
    width: 388,
    height: 125,
    marginRight: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },

  postsNavCenter: {
    minWidth: 388,
    maxWidth: 388,
    width: 388,
    height: 125,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  
  postsNavRight: {
    minWidth: 388,
    maxWidth: 388,
    width: 388,
    height: 125,
    marginLeft: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },

  postsLeft: {
    backgroundColor: 'rgba(196, 196, 196, 0.8)',
    height: 388,
    width: 388,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  postsMiddle: {
    backgroundColor: 'rgba(196, 196, 196, 0.8)',
    height: 388,
    width: 388,
    marginLeft: 3,
    marginRight: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  postsRight: {
    backgroundColor: 'rgba(196, 196, 196, 0.8)',
    height: 388,
    width: 388,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  username: {
    fontSize: 42,
    color: 'white'
  }
  
});
