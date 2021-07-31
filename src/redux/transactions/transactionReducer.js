import {
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAIL,
  SET_SELECTED_USER,
} from "./actions";

const initialState = {
  loading: false,
  transactions: [],
  error: "",
  selectedUser: null,
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };

    case FETCH_TRANSACTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };

    default:
      return state;
  }
};
