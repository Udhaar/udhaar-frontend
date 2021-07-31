import React, { useEffect, useState } from "react";
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
import { Provider } from "react-redux";
import store from "./redux/store";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/ui/actions";

export default function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const
  // const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(async () => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      const response = await getCurrentUser();
      if (response[0].status === 200) {
        // dispatch(setCurrentUser(response[1]));
        setCurrentUser(response[1]);
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <div className="h-screen bg-white">
        {currentUser ? <MainRouter /> : <BeforeLoginRouter />}
      </div>
    </Provider>
  );
}
