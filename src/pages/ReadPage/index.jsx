import React, { Component, Fragment } from 'react';

import BaseBlogPage from '../BaseBlogPage';
import HighlightPost from '../../components/HighlightPost';
import { posts } from '../../data_source';

class ReadPage extends Component {
  
  render() {
    let items = posts.sort(() => .5 - Math.random()); // shuffle
    items = items.slice(0,5);

    return (
      <Fragment>
        <BaseBlogPage title="Saiba Mais">

          {items.map((item, i) => {
            return (
              <HighlightPost post={item} key={i}/>
            );
          })}
          
        </BaseBlogPage>
      </Fragment>
    );
  }
}

export default ReadPage;