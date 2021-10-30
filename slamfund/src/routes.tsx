import Home from "./pages/Home/Home";
import Login from "./pages/Credentials/Login/Login";
import SignUp from "./pages/Credentials/SignUp/SignUp";
import Reset from "./pages/Credentials/Reset/Reset";
import ResetForm from "./pages/Credentials/ResetForm/ResetForm";
import SignedUp from "./pages/Credentials/SignedUp/SignedUp";
import Account from "./pages/Account/Account";
import Earnings from "./pages/Earnings/Earnings";
import Coders from "./pages/Coders/Coders";
import Modelers from "./pages/Coders/Modeler";
import Modeler from "./pages/Coders/Modeler";
import Portfolio from "./pages/Portfolio/Portfolio";

export const routes = [
  {
    component: Home,
    path: "/",
    protected: true,
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
  {
    component: Earnings,
    path: "/analysis",
    protected: true,
  },
  {
    component: Coders,
    path: "/coders",
    protected: true,
  },
  {
    component: Modeler,
    path: "/modeler",
    protected: true,
  },
  {
    component: Portfolio,
    path: "/portfolio",
    protected: true,
  },
];

export const protectedRoutes = routes.map((route) => {
  if (route.protected) {
    return route.path;
  } else {
    return null;
  }
});
