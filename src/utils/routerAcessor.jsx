import { Route, Navigate } from "react-router-dom";
import { ROUTES } from "@constants";

export const renderRoute = (routes, parentPrefix) => {
  return routes.map( (route) => {
    const { component: ReactComponent, children, exact } = route;
    const computedPass =`${parentPrefix}${route.path}`;
    const parentRoute = < Route key={computedPass} path={computedPass} exact={exact} element={<ReactComponent />}/>
  
    if(children.length){
     return [parentRoute, ...renderRoute(children, computedPass)];
    } else {
      return parentRoute;
    }
  }) 
  
}

export const routerAcessor = (privetRouter, publicRouter) => {
  const rootPrefix = "";
  const routes = renderRoute([...publicRouter, ...privetRouter], rootPrefix);
  const redirect = <Route key={ROUTES.ALL} path={ROUTES.ALL} element= {<Navigate to={ROUTES.TODOS}/>}/>;
  

  return [...routes, redirect].flat();
};
