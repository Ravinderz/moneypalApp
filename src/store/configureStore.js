import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import dashboardReducer from "./reducers/dashboardReducer";
import notificationsReducer from "./reducers/notificationReducer";
const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  notifications: notificationsReducer
});
const configureStore = () => {
  return createStore(rootReducer,applyMiddleware(thunk));
};
export default configureStore;

//  authReducer: authReducer,
