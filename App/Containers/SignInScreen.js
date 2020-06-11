import React, { Component } from 'react'
import {
  ScrollView, Text, KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { Kohana } from "react-native-textinput-effects";
import CardView from "react-native-cardview";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignInScreenStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Images, Colors } from '../Themes';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableAutomaticScroll contentContainerStyle={{ flexGrow: 1, height: Dimensions.get('window').height - StatusBar.currentHeight }}>
          <View style={{
            flex: 1
          }}>
            <View
              style={{
                width: "100%",
                height: "30%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image style={{ width: 120, height: 120 }} source={Images.face} />
            </View>
            <View
              style={{ width: "100%", height: "65%", paddingHorizontal: 30 }}
            >
              <View style={{ width: "100%", height: "30%" }}>
                <CardView
                  style={{ height: 45 }}
                  cardElevation={3}
                  cardMaxElevation={3}
                  cornerRadius={5}
                >
                  <Kohana
                    keyboardType="email-address"
                    style={{
                      borderWidth: 1,
                      borderColor: "white",
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    label={"Tài khoản"}
                    iconClass={SimpleLineIcons}
                    iconName={"user"}
                    iconColor={"grey"}
                    inputPadding={10}
                    labelStyle={{
                      color: "grey",
                      paddingLeft: 10,
                      fontSize: 14,
                      fontWeight: "500"
                    }}
                    inputStyle={{ color: "grey", fontSize: 14, height: 48 }}
                    value={this.state.email}
                    onChangeText={text => {
                      this.setState({ email: text });
                    }}
                    useNativeDriver
                  />
                </CardView>
                <CardView
                  style={{ height: 45, marginTop: 24 }}
                  cardElevation={3}
                  cardMaxElevation={3}
                  cornerRadius={5}
                >
                  <Kohana
                    style={{
                      borderWidth: 1,
                      borderColor: "white",
                      borderRadius: 5,
                      alignItems: "center"
                    }}
                    show={true}
                    label={"Mật khẩu"}
                    iconClass={SimpleLineIcons}
                    iconName={"lock"}
                    iconColor={"grey"}
                    inputPadding={10}
                    labelStyle={{
                      color: "grey",
                      paddingLeft: 10,
                      fontSize: 14,
                      fontWeight: "500"
                    }}
                    inputStyle={{ color: "grey", fontSize: 14 }}
                    value={this.state.password}
                    onChangeText={text => {
                      this.setState({ password: text });
                    }}
                    useNativeDriver
                  />
                </CardView>
              </View>

              <View style={{ paddingVertical: 40, height: "40%", justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    width: 100,
                    height: 50,
                    borderRadius: 8,
                    backgroundColor: Colors.main,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onPress={() => {
                    this.handleLogin();
                  }}
                >
                  <Text
                    style={[styles.text, { fontSize: 16, fontWeight: "bold" }]}
                  >
                    Đăng nhập
                  </Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }

  handleLogin() {
    this.props.navigation.navigate("PrimaryNav")
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)
