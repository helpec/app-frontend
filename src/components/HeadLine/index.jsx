import React, { Component } from 'react';

class HeadLine extends Component {
  render() {
    return (
        <section id="inner-headline">
          <div className="container">
            <div className="row">
              <div className="span4">
                <div className="inner-heading">
                  <h2>Meu Perfil</h2>
                </div>
              </div>
              <div className="span8">
                <ul className="breadcrumb">
                  <li><a href="#"><i className="icon-home"></i></a><i className="icon-angle-right"></i></li>
                  <li><a href="#">Blog</a><i className="icon-angle-right"></i></li>
                  <li className="active">Blog with left sidebar</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default HeadLine;