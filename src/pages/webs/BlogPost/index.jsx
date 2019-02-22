import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';

import BaseBlogPage from 'pages/bases/BaseBlogPage';

import { posts } from 'data_source';


class BlogPost extends Component {
   constructor(props) {
    super(props);

    this.state = {
      post: {},
      post_id: props.match.params.post_uid,
    };

  }
  componentWillMount(){
    let post_uid = this.props.match.params.post_uid;
    const post = posts.filter(post => post.uid == post_uid);

    this.setState({
      post: post[0],
    });

  }

  render() {
    let post = this.state.post;
    return (
      <Fragment>
        <BaseBlogPage title={post.title}>
            <article>
              <div className="row">
                <div className="span8">
                  <div className="post-image">
                    <div className="post-heading">
                      <h3><Link to={`/saibamais/${post.categorie}/${post.uid}/`}>{post.title}</Link></h3>
                    </div>
                    <img src={post.img} alt="" />
                  </div>
                  <div>
                    <p dangerouslySetInnerHTML={{__html: post.full_text}} ></p>
                  </div>
                  <div className="bottom-article">
                    <ul className="meta-post">
                      <li><i className="icon-folder-open"></i>
                        <Link to={`/saibamais/${post.categorie}/`} >{post.categorieTitle}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
            {/* -- author info -- */}
            {post.author.map((item, i) => {
              return (
                <div className="about-author" key={i}>
                 <h5><strong>{item}</strong></h5>
                </div>
              )
            })};
        </BaseBlogPage>
      </Fragment>
    );
  }
}

export default BlogPost;