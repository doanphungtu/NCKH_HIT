import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  upimageRequest: ["image"],
  upimageSuccess: ["data_up_image"],
  upimageFailure: ["error"],
});

export const UpImageTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  data_up_image: null
});
/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

// we're attempting to signin
export const request = state => state.merge({ fetching: true, error: false });

// we've successfully logged in
export const success = (state, { data_up_image }) => {
  return state.merge({
    fetching: false,
    error: false,
    data_up_image: data_up_image,
  });
};

// we've had a problem logging in
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPIMAGE_REQUEST]: request,
  [Types.UPIMAGE_SUCCESS]: success,
  [Types.UPIMAGE_FAILURE]: failure,
});