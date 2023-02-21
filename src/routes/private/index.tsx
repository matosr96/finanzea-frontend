import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/layout";
import Categories from "../../screens/categories";
import Expenses from "../../screens/expenses";
import Welcome from "../../screens/welcome";
import { PrivateConstantsRoutes } from "./constants";
import Navigation from "../../components/navigation";
import CreateCategory from "../../screens/categories/create";

const PrivateRoutes = () => {
  return (
    <Navigation>
      <Routes>
        <Route path={PrivateConstantsRoutes.WELCOME} element={<Welcome />} />
        <Route path={PrivateConstantsRoutes.CATEGORIES} element={<Categories />} />
        <Route path={PrivateConstantsRoutes.CREATE_CATEGORY} element={<CreateCategory />} />
        <Route path={PrivateConstantsRoutes.EXPENSES} element={<Expenses />} />
      </Routes>
    </Navigation>
  );
};

export default PrivateRoutes;
