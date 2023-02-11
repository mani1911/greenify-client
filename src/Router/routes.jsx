import { Login, PageNotFound, Signup } from "../Pages";

const routes = [
  {
    title: "Signup",
    path: "/register",
    description: "Sign Up Page",
    element: <Signup />,
  },
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
