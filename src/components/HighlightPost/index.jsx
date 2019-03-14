import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };

class HighlightPost extends Component {
  render() {
    let post = this.props.post;
    let cdate = (new Date());
    return (
        <article>
          <div className="row">
            <div className="span8">
              <div className="post-image">
                <div className="post-heading">
                  <h3><Link to={`/saibamais/${post.categorie}/${post.uid}/`}>{post.title}</Link></h3>
                </div>
              </div>
              <p>{post.text}</p>
              <div className="bottom-article">
                <ul className="meta-post">
                  <li><i className="icon-calendar"></i>{ cdate.toLocaleDateString('pt-BR', DATE_OPTIONS) }</li>
                  <li><i className="icon-folder-open"></i><Link to={`/saibamais/${post.categorie}/`} >{post.categorieTitle}</Link></li>
                </ul>
                <Link to={`/saibamais/${post.categorie}/${post.uid}/`} className="pull-right">
                    Continue lendo<i className="icon-angle-right"></i></Link>
              </div>
            </div>
          </div>
        </article>
    )
  }
}

export default HighlightPost;