// const { FETCH_TRANSPORT_SUCCESS } = require("./transportTypes");
import { FETCH_TRANSPORT_SUCCESS } from "./transportTypes";

const initialState = {
  data: [],
};

const transportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSPORT_SUCCESS:
      return {
        ...state,

        data: action.payload,
      };

    default:
      return state;
  }
};
export default transportReducer;
