import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar/Navbar";
import GlobalContext, { reducer, initialState } from "./GlobalContext";
import { getCurrentUser } from "./api/api";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  // const initialState = { navbarOpen: false };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    console.log("tok", access_token);
    if (access_token) {
      const currentUser = getCurrentUser().then((data) => {
        if (data[0].status === 200) {
          dispatch({ type: "set_current_user", value: data[1] });
        }
      });
    }
    // return () => {
    //   cleanup;
    // };
  }, []);
  return (
    <GlobalContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div className="h-screen bg-green-400">
        <div className="flex flex-shrink-0 flex-grow-0">
          <BrowserRouter>
            {state.currentUser && <Navbar />}
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/transactions" component={Transactions} exact />
          </BrowserRouter>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
