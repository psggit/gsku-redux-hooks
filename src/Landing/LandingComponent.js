import React from "react";
import { HomeComponent } from "./../Home/index";
import { fetchLogsAPI } from "./duck/index";
import { useDispatch, useSelector } from "react-redux";

const Landing = () => {
  const dispatch = useDispatch();
  const landingReducer = useSelector((state) => state.landing);

  console.log("landing red", landingReducer);

  const handleLandingClick = () => {
    dispatch(fetchLogsAPI());
  };

  return (
    <div>
      <button onClick={handleLandingClick}>Landing</button>
      <HomeComponent />
    </div>
  );
};

export { Landing };
