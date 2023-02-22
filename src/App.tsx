import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Navigation from "./components/navigation";
import PrivateRoutes from "./routes/private";
import { PublicRoutesConstants } from "./routes/public/constants";
import Signin from "./screens/signin";
import Signup from "./screens/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PublicRoutesConstants.SIGNIN} element={<Signin />} />
        <Route path={PublicRoutesConstants.SIGNUP} element={<Signup />} />
      </Routes>
      <Layout>
        <PrivateRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
