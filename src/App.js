import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SigninPage from './pages/Signin';
import SignupPage from './pages/Signup';
import ProfilesPage from './pages/Profiles';
import ContentPage from './pages/Content';
import PageNotFound from './pages/NoMatchPage';
import { RedirectUser, PrivateRoute, ProtectedRoute } from './utils/routes';
import { useAuthListener } from './hooks';
import { routes } from './routes';


export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <Route path={routes.home} exact>
          <RedirectUser 
            user={user}
            loggedInPath={routes.profile}
            >
            <Homepage />
          </RedirectUser>
        </Route>
          <Route path={routes.signin} exact>
              <RedirectUser 
              user={user} 
              loggedInPath={routes.profile}
              >
                <SigninPage />
              </RedirectUser>
          </Route>
        <Route path={routes.signup} exact component={SignupPage} />
        <PrivateRoute user={user} path={routes.profile}>
          <ProfilesPage />
        </PrivateRoute>
        <PrivateRoute user={user} path={routes.content}>
          <ContentPage />
        </PrivateRoute>
        <Route path="*" componet={PageNotFound} />
      </Switch>
    </Router>
  );
}
