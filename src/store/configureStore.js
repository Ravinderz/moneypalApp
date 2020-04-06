import { combineReducers, createStore } from "redux";
import dashboardReducer from "./reducers/dashboardReducer";
import notificationsReducer from "./reducers/notificationReducer";
const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  notifications: notificationsReducer
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;

//  authReducer: authReducer,
