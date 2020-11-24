import { createStore } from "redux";

const INITIAL_STATE = {
  TOKEN: null,
  USERNAME: null,
  USERID: null,
};

function ROOT_REDUCER(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGOUT":
      return INITIAL_STATE;
    case "LOGIN":
      return {
        TOKEN: action.token,
        USERNAME: action.username,
        USERID: action.userid,
      };
    default:
      return state;
  }
}

const store = createStore(ROOT_REDUCER);

export default store;
