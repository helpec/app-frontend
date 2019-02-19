import React, { Component, Fragment } from 'react';

import BaseBlogPage from '../BaseBlogPage';
import HighlightPost from '../../components/HighlightPost';

import { posts, categories } from '../../data_source';

class CategoriePage extends Component {
  
   constructor(props) {
    super(props);

    this.state = {
      items: [],
      categorie: props.match.params.categorie_uid,
    };
    
  }
  update_categories(categorie){
    const items = posts.filter(post => post.categorie == categorie);

    this.setState({
      items: items,
      categorie: categorie,
      categorieTitle: categories.get(categorie).categorieTitle
    });
    
  }
  
  componentWillReceiveProps(nextProps) {
    console.log("ILL")
    if(nextProps.match.params.categorie_uid == this.state.categorie){
      return;
    }else {
      this.update_categories(nextProps.match.params.categorie_uid);
    }
    
  }
  componentDidMount (){
    console.log('mount')
    this.update_categories(this.props.match.params.categorie_uid);
  }
  
  render() {
    return (
      <Fragment>
        <BaseBlogPage title={`Saiba Mais sobre ${this.state.categorieTitle}`}>

          {this.state.items.map((item, i) => {
            return (
              <HighlightPost post={item} key={i}/>
            );
          })}

        </BaseBlogPage>
      </Fragment>
    );
  }
}

export default CategoriePage;