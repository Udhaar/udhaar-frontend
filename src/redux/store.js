import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { uiReducer } from "./ui/uiReducer";
import { balanceReducer } from "./balances/balanceReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ ui: uiReducer, balance: balanceReducer });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
