import { Route, Routes } from "react-router-dom";
import Categories from "../../screens/categories";
import Expenses from "../../screens/expenses";
import Welcome from "../../screens/welcome";
import Savings from "../../screens/savings";
import { PrivateConstantsRoutes } from "./constants";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path={PrivateConstantsRoutes.WELCOME} element={<Welcome />} />
      <Route
        path={PrivateConstantsRoutes.CATEGORIES}
        element={<Categories />}
      />
      <Route path={PrivateConstantsRoutes.SAVINGS} element={<Savings />} />
      <Route path={PrivateConstantsRoutes.EXPENSES} element={<Expenses />} />
      <Route path={PrivateConstantsRoutes.EXPENSES} element={<Expenses />} />
    </Routes>
  );
};

export default PrivateRoutes;
