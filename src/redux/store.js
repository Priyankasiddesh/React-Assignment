import { createStore, applyMiddleware } from "redux";
//import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import transportReducer from "./TransportDetails/transportReducer";

const store = createStore(transportReducer, applyMiddleware(thunk));
export default store;
