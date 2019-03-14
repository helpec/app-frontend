import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { posts } from '../../data_source';


class LastestPosts extends Component {
  render() {
    let items = posts.sort(() => .5 - Math.random()); // shuffle
    items = items.slice(0,3);

    return (
        <div className="widget">
            <h5 className="widgetheading">Últimos Artigos</h5>
            <ul className="recent">
              {items.map((item, i) => {
                return (
                  <li key={i}>
                    <img src={item.img} className="pull-left" alt="" />
                    <h6><Link to={`/saibamais/${item.categorie}/${item.uid}/`}>{item.title}</Link></h6>
                    <p>{item.text.slice(0,100)}...</p>
                  </li>
                );
              })}
            </ul>
        </div>
    );
  }
}

export default LastestPosts;