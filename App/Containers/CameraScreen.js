import React, { Component } from 'react'
import {
  ScrollView, Text, KeyboardAvoidingView,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CameraScreenStyle'
import { RNCamera } from 'react-native-camera';
import Modal from 'react-native-modal'

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_modal_success: false,
      data_img: '',
      type: 'front'
    }
  }

  handleFaceDetected = faceArray => {
    this.takePicture();
    // this.setState({ show_modal_success: true });
    // setTimeout = () => {
    //   this.setState({ show_modal_success: false }), 1000
    // }
  };

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ data_img: data.uri });
      // console.tron.log("AAAA", data.uri);
    }
  }

  toggleFacing() {
    this.setState({
      type: this.state.type === 'back' ? 'front' : 'back',
    });
  }

  modal_success() {
    return (
      <Modal
        isVisible={this.state.show_modal_success}
        style={[styles.modal_loading_Container]}
        onBackdropPress={() => this.setState({ show_modal_success: false })}
        animationIn="zoomIn"
        animationOut="zoomOut"
      // onModalHide={() => this.props.navigation.navigate("DrawerNav")}
      >
        <View style={styles.left_contend_modal}>
          <ActivityIndicator color="blue" size="large" />
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
        // onFacesDetected={this.handleFaceDetected}
        />
        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.toggleFacing()} style={styles.flip}>
          <Text style={{ fontSize: 14 }}> Flip </Text>
        </TouchableOpacity>

        {this.state.data_img ?
          <Image source={{ uri: this.state.data_img }} style={{ width: 100, height: 150, position: 'absolute', top: 10, left: 10 }} /> : null
        }
        {this.modal_success()}
      </View>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen)
