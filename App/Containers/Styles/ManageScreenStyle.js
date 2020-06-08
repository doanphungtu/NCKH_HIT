import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  view_item: {
    width: "100%",
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  view_masv: {
    flex: .3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view_ht: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view_tt: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
