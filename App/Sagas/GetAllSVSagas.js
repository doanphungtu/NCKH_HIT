import { put, call, select } from "redux-saga/effects";
import GetAllSVActions from "../Redux/GetAllSVRedux";
import Axios from "axios";
import reactotron from "reactotron-react-native";
import { BASE_URL } from "../Config/UrlConfig.js";

export function* get_all_sv(action) {
  try {
    const data = yield Axios({
      method: "POST",
      url: `${BASE_URL}/getallsv`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    yield put(GetAllSVActions.getallsvSuccess(data));
  } catch (err) {
    console.tron.log("err", err)
    yield put(
      GetAllSVActions.getallsvFailure({
        errMessage: `${JSON.stringify(err.response.data)}`
      })
    );
  }
}
