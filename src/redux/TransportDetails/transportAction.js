import axios from "axios";
import { FETCH_TRANSPORT_SUCCESS } from "./transportTypes";

const fetchTransportSuccess = (data) => {
  return {
    type: FETCH_TRANSPORT_SUCCESS,
    payload: data,
  };
};
export default fetchTransportSuccess;

export const fetchDetails = () => {
  return (dispatch) => {
    axios
      .get("data.json")
      .then((response) => {
        const data = response.data;
        console.log("data", data);
        dispatch(fetchTransportSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
