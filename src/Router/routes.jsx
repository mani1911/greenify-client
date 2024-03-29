import { Login, PageNotFound, Signup ,Dashboard} from "../Pages";

const routes = [
  {
    title: "Signup",
    path: "/register",
    description: "Sign Up Page",
    element: <Signup />,
  },
  {
    title: "Login",
    path: "/login",
    description: "Login Page",
    element: <Login />,
  },
  {
    title: "Dashboard",
    path: "/",
    description: "Dashboard Page",
    element: <Dashboard />,
  },
  {
    title: "Page Not Found",
    path: "/404",
    description: "Page not found",
    element: <PageNotFound />,
  },
];

export default routes;
