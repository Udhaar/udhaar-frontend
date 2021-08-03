import { getBalances } from "../../api/api";

export const FETCH_BALANCES_REQUEST = "FETCH_BALANCES_REQUEST";
export const FETCH_BALANCES_SUCCESS = "FETCH_BALANCES_SUCCESS";
export const FETCH_BALANCES_FAIL = "FETCH_BALANCES_FAIL";

export const fetchBalancesRequest = () => {
  return {
    type: FETCH_BALANCES_REQUEST,
  };
};

export const fetchBalancesSuccess = (balances) => {
  return {
    type: FETCH_BALANCES_SUCCESS,
    payload: balances,
  };
};

export const fetchBalancesFail = (error) => {
  return {
    type: FETCH_BALANCES_FAIL,
    payload: error,
  };
};

export const fetchBalances = () => {
  return (dispatch) => {
    dispatch(fetchBalancesRequest());
    getBalances().then((response) => {
      response[0].status === 200
        ? dispatch(fetchBalancesSuccess(response[1].results))
        : dispatch(fetchBalancesFail(response[1]));
    });
  };
};
