import React, { Component, Fragment } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

class BasePage extends Component {
    render() {
        return (
            <Fragment>
                <div id="wrapper">
                  <Header />
                  { this.props.children }
                  <Footer />
                </div>
            </Fragment>
        );
    }
}
export default BasePage;