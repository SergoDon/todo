import { ROUTES } from "../constants";
import { TodosContainer } from "@containers";
import { Activation, Registration, Forgot, Reset, SignIn, SignUp } from "@components";

export const privateRoutes = [
  {
    path: ROUTES.TODOS,
    component: TodosContainer,
    exact: true,
    children: [
      {
        path: "/:id",
        component: () => null,
        exact: true,
        children: [],
      },
    ],
  },
];

export const publicRoutes = [
  {
    path: ROUTES.ACTIVATION,
    component: Activation,
    exact: true,
    children: [],
  },
  {
    path: ROUTES.REGISTRATION,
    component: Registration,
    exact: true,
    children: [],
  },
  {
    path: ROUTES.FORGOT,
    component: Forgot,
    exact: true,
    children: [],
  },
  {
    path: ROUTES.RESET,
    component: Reset,
    exact: true,
    children: [],
  },
  {
    path: ROUTES.SIGNUP,
    component: SignUp,
    exact: true,
    children: [],
  },
  {
    path: ROUTES.SIGNIN,
    component: SignIn,
    exact: true,
    children: [],
  },
];
