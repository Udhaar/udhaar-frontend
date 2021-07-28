import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar/Navbar";
import GlobalContext, { reducer, initialState } from "./GlobalContext";
import { getCurrentUser } from "./api/api";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div className="h-screen bg-green-400">
        <div className="flex flex-shrink-0 flex-grow-0">
          <BrowserRouter>
            <ToastContainer />
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
