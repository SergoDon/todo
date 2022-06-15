import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "@constants";
import { TodosContainer } from "@containers";
import * as All from "@components"; //{ Activation, Forgot, Reset, Sigin, SignUp, Registration }
const App = () => {
  const component = (routeComponent) => {
    for (let value in All) {
      if (value === routeComponent) {
        return All[value]();
      }
    }
  };

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={component(route.component) ? component(route.component) : <TodosContainer />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
