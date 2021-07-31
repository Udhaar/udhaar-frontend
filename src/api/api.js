import { FireRequest } from "./FireRequest";

export const signin = (body, pathParam) => {
  return FireRequest(
    "POST",
    `/user/token/`,
    body,
    true,
    pathParam,
    null,
    false
  );
};

export const signup = (body, pathParam) => {
  return FireRequest(
    "POST",
    `/user/create/`,
    body,
    true,
    pathParam,
    null,
    false
  );
};

export const getCurrentUser = () => {
  return FireRequest("GET", `/user/me/`, {}, false, {}, null, true);
};

export const getBalances = () => {
  return FireRequest("GET", `/balance/`, {}, false, {}, null, true);
};

export const transactionList = (pathParam) => {
  return FireRequest("GET", "/transaction/", {}, false, pathParam, {}, true);
};

export const createTransaction = (body, pathParam) => {
  return FireRequest("POST", `/transaction/`, body, true, pathParam, {}, true);
};

export const declineOrAcceptTransaction = (body, params) => {
  return FireRequest(
    "PATCH",
    "/transaction/:external_id/",
    body,
    true,
    {},
    params,
    true
  );
};

export const searchUser = (pathParam) => {
  return FireRequest("GET", "/user/search/", {}, false, pathParam, {}, true);
};

export const getBalance = (params) => {
  return FireRequest(
    "GET",
    "/balance/:external_id",
    {},
    false,
    {},
    params,
    true
  );
};
