import { Route, Routes } from "react-router-dom";
import Categories from "../../screens/categories";
import Expenses from "../../screens/expenses";
import Welcome from "../../screens/welcome";
import { PrivateConstantsRoutes } from "./constants";
import CreateCategory from "../../screens/categories/create";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path={PrivateConstantsRoutes.WELCOME} element={<Welcome />} />
      <Route
        path={PrivateConstantsRoutes.CATEGORIES}
        element={<Categories />}
      />
      <Route
        path={PrivateConstantsRoutes.CREATE_CATEGORY}
        element={<CreateCategory />}
      />
      <Route path={PrivateConstantsRoutes.EXPENSES} element={<Expenses />} />
    </Routes>
  );
};

export default PrivateRoutes;
