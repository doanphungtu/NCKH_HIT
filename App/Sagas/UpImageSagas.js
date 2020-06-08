import { put, call, select } from "redux-saga/effects";
import UpImageActions from "../Redux/UpImageRedux";
import Axios from "axios";
import reactotron from "reactotron-react-native";
import { BASE_URL } from "../Config/UrlConfig.js";

export function* up_image(action) {
  let formData = new FormData();
  let a = action.image.split("/");
  formData.append('image', {
    uri: action.image,
    type: 'image/jpeg',
    name: a[a.length - 1],
  })

  try {
    const data = yield Axios({
      method: "POST",
      url: `${BASE_URL}/check`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },      
      data: formData
    });
    yield put(UpImageActions.upimageSuccess(data));
  } catch (err) {
    console.tron.log("err", err)
    yield put(
      UpImageActions.upimageFailure({
        errMessage: `${JSON.stringify(err.response.data)}`
      })
    );
  }
}
