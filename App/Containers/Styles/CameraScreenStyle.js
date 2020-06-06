import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  modal_loading_Container: {
    width: 0.8 * Metrics.screenWidth,
    height: 100,
    borderRadius: 8,
    backgroundColor: 'white',
    position: 'absolute',
    top: Metrics.screenHeight / 2 - 50,
    left: Metrics.screenWidth / 2 - 0.4 * Metrics.screenWidth,
    margin: 0,
    flexDirection: 'row'
  },
  left_contend_modal: {
    height: '100%',
    width: 140,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right_contend_modal: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: "100%",
    width: 0.8 * Metrics.screenWidth - 100
  },
  txt_modal_loading: {
    color: 'black',
    fontSize: 15,
    fontFamily: Fonts.type.base,
    textAlign: 'center'
  },
  btn_ok_modal: {
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#F15249",
    borderRadius: 5,
    alignSelf: 'center'
  },
  txt_btn_ok_modal: {
    fontSize: 15,
    color: 'white',
    fontFamily: Fonts.type.bold
  },
  capture: {
    position: 'absolute',
    bottom: 50,
    left: Metrics.screenWidth / 2 - 50,
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: 'center'
  },
  flip: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 15,
    justifyContent: "center",
    alignItems: 'center'
  },
})
