import { createAction } from "@reduxjs/toolkit";

const fetchLogsInProgress = createAction("fetchLogsInProgress");

const fetchLogsInSuccess = createAction("fetchLogsInSuccess");

const fetchLogsInFailed = createAction("fetchLogsInFailed");

export { fetchLogsInProgress, fetchLogsInSuccess, fetchLogsInFailed };
