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
import { Table, TableWrapper, Row } from 'react-native-table-component';

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

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['STT', 'Mã sv', 'Họ tên', 'Lớp', 'Khóa', 'Vị trí', 'Tình trạng'],
      widthArr: [50, 140, 220, 120, 120, 80, 200]
    }
  }

  render() {
    const state = this.state;
    return (
      this.props.data_get_all_sv.data_get_all_sv ?
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                  {
                    this.props.data_get_all_sv.data_get_all_sv.data.map((item, index) => (
                      <Row
                        key={index}
                        data={[index + 1, item.masv, item.name, item.lop, item.khoa, item.vt, item.check == "0" ? "Chưa điểm danh" : "Điểm danh"]}
                        widthArr={state.widthArr}
                        style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                        textStyle={styles.text}
                      />
                    ))
                  }
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
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
