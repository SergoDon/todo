import { Route } from "react-router-dom";
export const routerAcessor = (privetRouter, publicRouter) => {
  const routes = [];

  publicRouter.forEach((publicRoute) => {
    const { component: ReactComponent, ...rest } = publicRoute;
    routes.push(<Route key={rest.path} {...rest} element={<ReactComponent />} />);
  });

  privetRouter.forEach((privetRoute) => {
    const { component: ReactComponent, ...rest } = privetRoute;
    routes.push(<Route key={rest.path} {...rest} element={<ReactComponent />} />);
  });

  return routes;
};
