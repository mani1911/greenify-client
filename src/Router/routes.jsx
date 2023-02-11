import { Login, PageNotFound } from "../Pages";

const routes = [
  {
    title: "Login",
    path: "/",
    description: "Login Page",
    element: <Login />,
  },
  {
    title: "Page Not Found",
    path: "/404",
    description: "Page not found",
    element: <PageNotFound />,
  },
];

export default routes;
