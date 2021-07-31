import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "./redux/ui/actions";
import { BeforeLoginRouter } from "./routers/BeforeLoginRouter";
import { MainRouter } from "./routers/MainRouter";

export const AppContainer = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.ui.currentUser);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) dispatch(fetchCurrentUser());
  }, []);

  return (
    <div className="h-screen bg-white">
      {currentUser ? <MainRouter /> : <BeforeLoginRouter />}
    </div>
  );
};
