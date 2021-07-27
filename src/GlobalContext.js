import { createContext, useReducer } from "react";

export const initialState = { navbarOpen: false, currentPage: null };
export const reducer = (state, action) => {
  switch (action.type) {
    case "open_navbar":
      return { ...state, navbarOpen: true };
    case "close_navbar":
      return { ...state, navbarOpen: false };
    case "set_current_page":
      return { ...state, currentPage: action.value };
  }
};
const GlobalContext = createContext();
export default GlobalContext;
