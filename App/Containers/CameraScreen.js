import React, { Component } from 'react'
import {
  ScrollView, Text, KeyboardAvoidingView,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { Table, TableWrapper, Row, Rows, Col, Cols } from 'react-native-table-component';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Actions from '../Redux/UpImageRedux'
import GetAllSVActions from '../Redux/GetAllSVRedux'
// Styles
import styles from './Styles/CameraScreenStyle'
import { RNCamera } from 'react-native-camera';
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ActionButton from 'react-native-action-button';
import { Images, Colors, Metrics } from '../Themes'

class CameraScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      header: null
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      data_img: '',
      type: 'front',
      show_modal_success: false,
      show_modal_fail: false,
      name: '',
      vt: '',
      tableTitle: ['Họ tên', 'Vị trí'],
    }
  }

  componentWillReceiveProps(props) {
    const { fetching, error, data_up_image } = props.data_up_image;
    if (error === false) {
      if (fetching === false && data_up_image) {
        console.tron.log("aaa", data_up_image.data);
        if (data_up_image.data.name) {
          this.setState({ show_modal_success: true, name: data_up_image.data.name, vt: data_up_image.data.vt });
        } else {
          this.setState({ show_modal_fail: true, name: data_up_image.data.msg });
        }
      }
    }
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.props.up_image(data.uri);
      this.setState({ data_img: data.uri });
    }
  }

  toggleFacing() {
    this.setState({
      type: this.state.type === 'back' ? 'front' : 'back',
    });
  }

  modal_fail() {
    return (
      <Modal
        isVisible={this.state.show_modal_fail}
        style={styles.modal_loading_Container}
        onBackdropPress={() => this.setState({ show_modal_fail: false })}
        animationIn="zoomIn"
        animationOut="zoomOut"
      >
        <Image source={Images.fail} style={styles.img_modal} />
        <View style={styles.view_modal_success}>
          <Text style={styles.txt_modal_loading}>{this.state.name}</Text>
        </View>
      </Modal>
    );
  }

  modal_success() {
    return (
      <Modal
        isVisible={this.state.show_modal_success}
        style={[styles.modal_loading_Container, { height: 100 }]}
        onBackdropPress={() => this.setState({ show_modal_success: false })}
        animationIn="zoomIn"
        animationOut="zoomOut"
      >
        <Image source={Images.tick} style={styles.img_modal} />
        <View style={styles.view_modal_success}>
          <Table borderStyle={{ borderWidth: 1, flex: 1 }}>
            <TableWrapper >
              <Rows data={[["Họ tên", this.state.name]]} widthArr={[0.2 * Metrics.screenWidth, 0.55 * Metrics.screenWidth]} style={styles.row} textStyle={styles.text} />
              <Rows data={[["Vị trí", this.state.vt]]} widthArr={[0.2 * Metrics.screenWidth, 0.55 * Metrics.screenWidth]} style={styles.row} textStyle={styles.text} />
            </TableWrapper>
          </Table>
        </View>
      </Modal >
    );
  }

  modal_loading() {
    return (
      <Modal
        isVisible={this.props.data_up_image.fetching}
        style={[styles.modal_loading_Container]}
        animationIn="zoomIn"
        animationOut="zoomOut"
      >
        <View style={styles.left_contend_modal}>
          <ActivityIndicator color={Colors.main} size="large" />
        </View>
        <View style={styles.right_contend_modal}>
          <Text style={[styles.txt_modal_loading, { fontSize: 16 }]}>... Đang xử lý</Text>
        </View>
      </Modal >
    );
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{ width: '100%', height: '100%' }}
          type={this.state.type}
          faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
        />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          position="left"
          offsetY={50}
          size={50}
        >
          <ActionButton.Item
            buttonColor='#9b59b6'
            title="Quản lý"
            onPress={() => {
              this.props.get_all_sv();
              this.props.navigation.navigate("ManageScreen")
            }}
            size={50}
          >
            <Ionicons name="md-list" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor='#3498db'
            title="Đăng xuất"
            onPress={() => console.log("notes tapped!")}
            size={50}
          >
            <Ionicons name="md-log-out" style={styles.actionButtonIcon} />
          </ActionButton.Item>

        </ActionButton>
        <TouchableOpacity
          onPress={() => {
            this.takePicture();
          }}
          style={styles.capture}
        >
          <Ionicons name="ios-camera" size={40} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.toggleFacing()}
          style={styles.flip}>
          <Feather name="refresh-ccw" size={20} color="white" />
        </TouchableOpacity>

        {this.state.data_img ?
          <Image source={{ uri: this.state.data_img }} style={{ width: 100, height: 150, position: 'absolute', top: 10, left: 10 }} /> : null
        }
        {this.modal_success()}
        {this.modal_loading()}
        {this.modal_fail()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  data_up_image: state.up_image,
})

const mapDispatchToProps = (dispatch) => ({
  up_image: (image) =>
    dispatch(Actions.upimageRequest(image)),

  get_all_sv: () =>
    dispatch(GetAllSVActions.getallsvRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen)
