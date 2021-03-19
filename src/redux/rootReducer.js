import { combineReducers } from "redux";
import { transportReducer } from "./TransportDetails/transportReducer";

const rootReducer = combineReducers({
  transportReducer,
});
export default rootReducer;
