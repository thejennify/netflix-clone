import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export  const  RedirectUser = ({ user, children, loggedInPath, ...rest}) => {
    return (
        <Route
        {...rest}
        render={() => 
          user ?
           ( <Redirect
            to={{
              pathname: loggedInPath
            }}
          />
          ) : ( children )
          }
      />
    )
}

export const PrivateRoute = ({user, children, ...rest}) => {
  return (
    <Route
    {...rest}
    render={({ location }) =>
      user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: {from: location},
          }}
        />
      )
    }
  />
)
}
