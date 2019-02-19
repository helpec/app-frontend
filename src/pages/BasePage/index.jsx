import React, { Component, Fragment } from 'react';
import FloatButton from '../../components/FloatButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeadLine from '../../components/HeadLine';

class BasePage extends Component {
    render() {
        return (
            <Fragment>
                <div id="wrapper">
                  <Header />
                  <HeadLine title={this.props.title} />
                  { this.props.children }
                  <Footer />
                  <FloatButton />
                </div>
            </Fragment>
        );
    }
}
export default BasePage;