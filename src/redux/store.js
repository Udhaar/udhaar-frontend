import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { uiReducer } from "./ui/uiReducer";
import { balanceReducer } from "./balances/balanceReducer";
import { transactionReducer } from "./transactions/transactionReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  ui: uiReducer,
  balance: balanceReducer,
  transaction: transactionReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
