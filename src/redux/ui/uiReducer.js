import {
  OPEN_NAVBAR,
  CLOSE_NAVBAR,
  SET_CURRENT_PAGE,
  SET_CURRENT_USER,
} from "./actions";

const initialState = {
  navbarOpen: false,
  currentUser: null,
  currentPage: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NAVBAR:
      return {
        ...state,
        navbarOpen: true,
      };

    case CLOSE_NAVBAR:
      return {
        ...state,
        navbarOpen: false,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
