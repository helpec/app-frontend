import React from 'react';
import { Redirect } from 'react-router';

import {removeSessionUser} from 'engine/helpers';

class Logout extends React.Component {

  render() {

    removeSessionUser()
    return (
        <Redirect to="/" />
    )
  }
}

export default Logout;