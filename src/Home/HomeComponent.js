import React from "react";
import { useDispatch, useSelector } from "react-redux";

function HomeComponent() {
  const landingReducer = useSelector((state) => state.landing);
  return (
    <div>
      home
      {landingReducer.fetchLogsInSuccess ? "Success" : "No Content"}
    </div>
  );
}

export { HomeComponent };
