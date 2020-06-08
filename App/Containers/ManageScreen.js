import React, { Component } from 'react'
import {
  ScrollView, Text, KeyboardAvoidingView,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ManageScreenStyle'
import { Images, Colors } from '../Themes'

class ManageScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'Quản lý',
      headerStyle: {
        backgroundColor: Colors.main,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
        color: 'white'
      },
      headerLeft: () => (
        <TouchableOpacity activeOpacity={.7} style={{ paddingHorizontal: 15, paddingVertical: 5 }} onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={25} color="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View></View>
      ),
    };
  };

  render_item(item, index) {
    return (
      <View style={styles.view_item}>
        <View style={styles.view_masv}>
          <Text>{item.masv}</Text>
        </View>
        <View style={styles.view_ht}>
          <Text>aaa</Text>
        </View>
        <View style={styles.view_tt}>
          <Text>aaa</Text>
        </View>
      </View>
    )
  }

  render() {
    console.tron.log("aaa", this.props.data_get_all_sv)
    return (
      this.props.data_get_all_sv.data_get_all_sv ?
      <FlatList
        extraData={this.props}
        data={[1,2,3]}
        // data={this.props.data_get_all_sv.data_get_all_sv.data}
        renderItem={({ item, index }) => this.render_item(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />
      :
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.main} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  data_get_all_sv: state.get_all_sv,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ManageScreen)
