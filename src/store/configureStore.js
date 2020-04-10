import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";
import contactReducer from "./reducers/contactReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import groupReducer from "./reducers/groupReducer";
import notificationsReducer from "./reducers/notificationReducer";
const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  notifications: notificationsReducer,
  auth:authReducer,
  contact:contactReducer,
  groups:groupReducer
});
const configureStore = () => {
  return createStore(rootReducer,applyMiddleware(thunk));
};
export default configureStore;

//  authReducer: authReducer,
