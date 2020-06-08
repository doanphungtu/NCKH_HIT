import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import ManageScreen from '../Containers/ManageScreen'
import SettingScreen from '../Containers/SettingScreen'
import CameraScreen from '../Containers/CameraScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import { createBottomTabNavigator } from 'react-navigation-tabs'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ManageScreen: { screen: ManageScreen },
  SettingScreen: { screen: SettingScreen },
  CameraScreen: { screen: CameraScreen },
  LaunchScreen: { screen: LaunchScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'CameraScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav);
