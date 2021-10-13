import Home from "./pages/Home/Home";
import Login from "./pages/Credentials/Login/Login";
import SignUp from "./pages/Credentials/SignUp/SignUp";
import Reset from "./pages/Credentials/Reset/Reset";
import ResetForm from "./pages/Credentials/ResetForm/ResetForm";
import SignedUp from "./pages/Credentials/SignedUp/SignedUp";
import Account from "./pages/Account/Account";

export const routes = [
  {
    component: Home,
    path: "/",
    protected: false,
  },
  {
    component: Login,
    path: "/login",
    protected: false,
  },
  {
    component: SignUp,
    path: "/signup",
    protected: false,
  },
  {
    component: ResetForm,
    path: "/resetform",
    protected: false,
  },
  {
    component: Reset,
    path: "/reset",
    protected: false,
  },
  {
    component: SignedUp,
    path: "/signedup",
    protected: true,
  },
  {
    component: Account,
    path: "/account",
    protected: true,
  },
];

export const protectedRoutes = routes.map((route) =>
  route.protected ? route.path : null
);
