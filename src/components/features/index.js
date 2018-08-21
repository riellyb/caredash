import React from 'react';
import Article from '../article';

import './_features.scss';

const NewsListing = props =>
  (<section className="features" id="features">
    <div className="container">
      <div className="row article-header">
        <div className="col-12">
          <h2>Reasons to Sign Up as a Provider on CareDash</h2>
        </div>
      </div>
      <div className="row">
        <Article image={'https://via.placeholder.com/200x200'} headline={'Article 1'}></Article>
        <Article image={'https://via.placeholder.com/200x200'} headline={'Article 2'}></Article>
        <Article image={'https://via.placeholder.com/200x200'} headline={'Article 3'}></Article>
      </div>
    </div>
  </section>);

export default NewsListing;
