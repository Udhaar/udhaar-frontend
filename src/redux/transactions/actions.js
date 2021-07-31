import { transactionList } from "../../api/api";
import { getBalance } from "../../api/api";
import store from "../store";

export const FETCH_TRANSACTIONS_REQUEST = "FETCH_TRANSACTIONS_REQUEST";
export const FETCH_TRANSACTIONS_SUCCESS = "FETCH_TRANSACTIONS_SUCCESS";
export const FETCH_TRANSACTIONS_FAIL = "FETCH_TRANSACTIONS_FAIL";
export const SET_SELECTED_USER = "SELECTED_USER";

export const fetchTransactionsRequest = () => {
  return {
    type: FETCH_TRANSACTIONS_REQUEST,
  };
};

export const fetchTransactionsSuccess = (balances) => {
  return {
    type: FETCH_TRANSACTIONS_SUCCESS,
    payload: balances,
  };
};

export const fetchTransactionsFail = (error) => {
  return {
    type: FETCH_TRANSACTIONS_FAIL,
    payload: error,
  };
};

export const setSelectedUser = (user) => {
  return {
    type: SET_SELECTED_USER,
    payload: user,
  };
};

export const fetchTransactions = (external_id) => {
  return (dispatch) => {
    dispatch(fetchTransactionsRequest);
    transactionList({
      user_external_id: external_id,
    }).then((response) => {
      response[0].status === 200
        ? dispatch(fetchTransactionsSuccess(response[1].results))
        : dispatch(fetchTransactionsFail(response[1]));
    });
  };
};

export const fetchSelectedUser = (external_id) => {
  return (dispatch) => {
    getBalance({ external_id: external_id }).then((response) => {
      response[0].status === 200 && dispatch(setSelectedUser(response[1]));
    });
  };
};
