import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getallsvRequest: [],
  getallsvSuccess: ["data_get_all_sv"],
  getallsvFailure: ["error"],
});

export const GetAllSVTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  data_get_all_sv: null
});
/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

// we're attempting to signin
export const request = state => state.merge({ fetching: true, error: false });

// we've successfully logged in
export const success = (state, { data_get_all_sv }) => {
  return state.merge({
    fetching: false,
    error: false,
    data_get_all_sv: data_get_all_sv,
  });
};

// we've had a problem logging in
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GETALLSV_REQUEST]: request,
  [Types.GETALLSV_SUCCESS]: success,
  [Types.GETALLSV_FAILURE]: failure,
});