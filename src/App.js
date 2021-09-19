import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./features/login/Login";
import AuthButton from "./components/AuthButton";
import useAuth from "./utils/useAuth";
import ProvideAuth from "./utils/provideAuth";
import { ProtectedLayout } from "./features/ProtectedRoute";
import { PublicLayout } from "./features/PublicRoute";
import NotFound from "./components/NotFoundPage/404-page";
// Pages
import Dashboard from "./features/dashboard";
// import Dashboard from "./dashboard/Dashboard.js";
import AppWrapper from "./components/AppWrapper";
import Settings from "./features/settings";
import TestPage from "./features/TestPage";
import Leads from "./features/leads";
import { ApiUrl } from "./helpers/getUrl";

export default function App() {
  console.log(ApiUrl());
  return (
    <AppWrapper>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/leads" component={Leads} />
            <Route path="/settings" component={Settings} />
            <Route path="/test" component={TestPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ProvideAuth>
    </AppWrapper>
  );
}
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
