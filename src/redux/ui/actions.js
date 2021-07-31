export const OPEN_NAVBAR = "OPEN_NAVBAR";
export const CLOSE_NAVBAR = "CLOSE_NAVBAR";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const openNavbar = () => {
  return {
    type: OPEN_NAVBAR,
    payload: null,
  };
};

export const closeNavbar = () => {
  return {
    type: CLOSE_NAVBAR,
    payload: null,
  };
};

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};
