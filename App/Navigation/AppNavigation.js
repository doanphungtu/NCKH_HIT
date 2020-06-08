import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import ManageScreen from '../Containers/ManageScreen'
import SettingScreen from '../Containers/SettingScreen'
import CameraScreen from '../Containers/CameraScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Easing, Animated } from 'react-native'

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 600,
      easing: Easing.out(Easing.poly(10)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [{ translateX }] }
    },
  }
}

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ManageScreen: { screen: ManageScreen },
  SettingScreen: { screen: SettingScreen },
  CameraScreen: { screen: CameraScreen },
  LaunchScreen: { screen: LaunchScreen },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'CameraScreen',
  transitionConfig,
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav);
