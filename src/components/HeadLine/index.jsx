import React, { Component } from 'react';

class HeadLine extends Component {
  render() {
    return (
        <section id="inner-headline">
          <div className="container">
            <div className="row">
              <div className="span4">
                <div className="inner-heading">
                  <h2>{this.props.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default HeadLine;