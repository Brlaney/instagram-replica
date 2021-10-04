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
    borderWidth: 0,
  },

  boxb: {
    height: 105,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  
  boxcRow: {
    height: 309,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  boxcCol1: {
    height: 309,
    width: 356,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  boxcCol2: {
    width: 814,
    height: 309,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  boxChild1: {
    width: 181,
    height: 309,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxChild2: {
    width: 181,
    height: 309,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxChild3: {
    width: 181,
    height: 309,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statsTextr1: {
    fontSize: 42,
    fontWeight: 'bold',
    alignSelf: 'center',
    letterSpacing: 1,
    color: 'white',
  },

  statsTextr2: {
    fontSize: 34,
    alignSelf: 'center',
    letterSpacing: 1,
    color: 'white',
  },

  boxd1: {
    height: 284,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  boxd2: {
    height: 156,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  boxe: {
    height: 331,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  boxf: {
    height: 125,
    width: 1170,
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderWidth: 0,
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
    borderWidth: 0,
  },

  boxh: {
    height: 155,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  bottomNoZone: {
    height: 96,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0,
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
    letterSpacing: 2,
    fontWeight: 'bold',
    color: 'white'
  },

  wideBtnVar1: {
    display: 'flex',
    flexDirection: 'row',
    width: 303,
    height: 96,
    marginLeft: 45,
    marginRight: 12,
    borderWidth: 3,
    borderColor: '#363636',
    borderRadius: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wideBtnVar2: {
    display: 'flex',
    flexDirection: 'row',
    width: 303,
    height: 96,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 3,
    borderColor: '#363636',
    borderRadius: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallButton: {
    display: 'flex',
    flexDirection: 'row',
    width: 96,
    height: 96,
    marginLeft: 12,
    marginRight: 45,
    borderWidth: 3,
    borderColor: '#363636',
    borderRadius: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 34,
    alignSelf: 'center',
    letterSpacing: 1,
    color: 'white',
  },

  header: {
    fontSize: 34,
    letterSpacing: 1,
    color: 'white',
  },

  bio: {
    fontSize: 28,
    letterSpacing: 1,
    color: 'white',
  },
  
});
