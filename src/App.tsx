import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./routes/private";
import PublicRoutes from "./routes/public";


function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
      <PrivateRoutes />
    </BrowserRouter>
  );
}

export default App;
