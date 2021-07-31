import {
  FETCH_BALANCES_REQUEST,
  FETCH_BALANCES_SUCCESS,
  FETCH_BALANCES_FAIL,
} from "./actions";

const initialState = {
  loading: false,
  balances: [],
  error: "",
};

export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BALANCES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BALANCES_SUCCESS:
      return {
        ...state,
        loading: false,
        balances: action.payload,
      };

    case FETCH_BALANCES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
