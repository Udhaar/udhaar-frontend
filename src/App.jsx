import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar/Navbar";
import GlobalContext, { reducer, initialState } from "./GlobalContext";
import { getCurrentUser } from "./api/api";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import { BeforeLoginRouter } from "./routers/BeforeLoginRouter";
import { MainRouter } from "./routers/MainRouter";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      const response = await getCurrentUser();
      if (response[0].status === 200) {
        dispatch({ type: "set_current_user", value: response[1] });
      }
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div className="h-screen bg-white">
        {state?.currentUser ? <MainRouter /> : <BeforeLoginRouter />}
      </div>
    </GlobalContext.Provider>
  );
}
