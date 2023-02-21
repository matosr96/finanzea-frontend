import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../../screens/signin";
import Signup from "../../screens/signup";
import { PublicRoutesConstants } from "./constants";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={PublicRoutesConstants.SIGNIN} element={<Signin />} />
      <Route path={PublicRoutesConstants.SIGNUP} element={<Signup />} />
    </Routes>
  );
};

export default PublicRoutes;
