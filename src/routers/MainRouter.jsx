import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transactions from "../pages/Transactions";
import Navbar from "../components/Navbar/Navbar";

export const MainRouter = () => {
  return (
    <div className="grid grid-cols-10">
      <Router>
        <div className="col-span-2">
          <Navbar />
        </div>
        <div className="col-span-10 md2:col-span-8">
          <Switch>
            <Route path="/" exact>
              <Transactions />
            </Route>
            <Route path="/transactions" exact>
              <Transactions />
            </Route>
            <Route path="/transactions/:external_id" exact>
              <Transactions />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
