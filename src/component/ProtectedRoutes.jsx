import { Route, Redirect } from "wouter";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      component={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}