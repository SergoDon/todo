import { BrowserRouter as Router, Routes} from "react-router-dom";
import { routerAcessor } from "./utils";

import { privateRoutes, publicRoutes} from "./router"
const App = () => {
  return (
    <Router>
      <Routes>
         {routerAcessor(privateRoutes, publicRoutes)}
      </Routes>
    </Router>
  );
};

export default App;
