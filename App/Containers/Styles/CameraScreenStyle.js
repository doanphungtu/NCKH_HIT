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
    width: 0.8 * Metrics.screenWidth - 140
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
    bottom: 40,
    left: Metrics.screenWidth / 2 - 35,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E65242',
    justifyContent: "center",
    alignItems: 'center'
  },
  flip: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    width: 50,
    height: 50,
    backgroundColor: '#E65242',
    borderRadius: 25,
    justifyContent: "center",
    alignItems: 'center'
  },
  img_modal: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: -30,
    left: Metrics.screenWidth / 2 - 60
  },
  view_modal_success: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 70,
    position: 'absolute',
    bottom: 0
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})
