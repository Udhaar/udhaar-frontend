import React, { useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar/Navbar";
import GlobalContext, { reducer, initialState } from "./GlobalContext";

export default function App() {
  // const initialState = { navbarOpen: false };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div className="h-screen bg-green-400">
        <div className="grid grid-cols-9">
          <BrowserRouter>
            <Navbar />
            <Route path="/transactions" component={Transactions} exact />
          </BrowserRouter>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
