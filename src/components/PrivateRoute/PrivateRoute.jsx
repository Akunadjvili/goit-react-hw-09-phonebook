import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({
  component: Component,
  redirectPath,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectPath} />
        )
      }
    />
  );
}
