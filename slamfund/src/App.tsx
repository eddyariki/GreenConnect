import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import GlobalCSS from "./global.css";
import GlobalVariables from "./variables.css";
import { AuthProvider } from "./context/user/useAuth";
import WithAxios from "./context/WithAxios";
import Header from "./layout/Header";
import WithRedirect from "./context/WithRedirect";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <WithAxios>
          <WithRedirect />
          <Header />
          <GlobalCSS />
          <GlobalVariables />
          <Switch>
            {routes.map((r) => {
              return <Route exact path={r.path} component={r.component} />;
            })}
          </Switch>
        </WithAxios>
      </AuthProvider>
    </Router>
  );
}
