import React from 'react';
import { Route, Redirect } from 'react-router';
import { isAuthentication } from 'engine/helpers'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthentication()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)