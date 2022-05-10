import { createReducer } from "@reduxjs/toolkit";
import {
  fetchLogsInProgress,
  fetchLogsInFailed,
  fetchLogsInSuccess,
} from "./action";

const initialValue = {
  fetchLogsInSuccess: false,
  fetchLogsInFailed: false,
  fetchLogsInProgress: false,
};

const landingSummaryReducer = createReducer(initialValue, {
  [fetchLogsInSuccess]: (state, data) => ({
    ...state,
    //accessablitySummary: data.payload,
    fetchLogsInSuccess: true,
    fetchLogsInFailed: false,
    fetchLogsInProgress: false,
    fetchedData: data.payload,
    errorMsg: "",
  }),
  [fetchLogsInFailed]: (state, data) => {
    return {
      ...state,
      fetchLogsInSuccess: false,
      fetchLogsInFailed: true,
      fetchLogsInProgress: false,
    };
  },
  [fetchLogsInProgress]: (state) => {
    console.log("in prog");
    return {
      ...state,
      fetchLogsInProgress: true,
      fetchLogsInSuccess: false,
      fetchLogsInFailed: false,
    };
  },
});
export { landingSummaryReducer };
