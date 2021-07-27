import { createContext, useReducer } from "react";

export const initialState = { navbarOpen: false };
export const reducer = (state, action, value) => {
  switch (action) {
    case "open_navbar":
      return { ...state, navbarOpen: true };
    case "close_navbar":
      return { ...state, navbarOpen: false };
  }
};
const GlobalContext = createContext();
export default GlobalContext;
