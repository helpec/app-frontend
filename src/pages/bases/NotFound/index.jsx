import React, { Component, Fragment } from 'react';

import BasePage from '../BasePage';

class NotFound extends Component {
  
  render() {
    return (
      <Fragment>
        <BasePage title="Pagina Não Encontrada">
            <section id="content">
                <div className="container">
                    <div className="row">
                      <div className="span12">
                        <h3 className="aligncenter">404 Error not found</h3>
        				<p className="aligncenter">
        					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam non mod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        				</p>
	                  </div>
	                </div>
            	</div>
        	</section>
        </BasePage>
      </Fragment>
    );
  }
}

export default NotFound;