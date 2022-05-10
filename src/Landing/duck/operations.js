import {
  fetchLogsInProgress,
  fetchLogsInSuccess,
  fetchLogsInFailed,
} from "./action";
import axios from "axios";
import store from "./../../store/store";

const fetchLogsAPI = (reqBody) => {
  console.log("hello");
  return () => {
    console.log("11");
    store.dispatch(fetchLogsInProgress());
    axios
      .get("https://api.github.com/users/mapbox")
      .then((response) => {
        store.dispatch(fetchLogsInSuccess(response));
      })
      .catch((error) => {
        store.dispatch(fetchLogsInFailed(error));
      });
  };
};

export { fetchLogsAPI };
