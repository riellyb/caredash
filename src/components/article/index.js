import React from 'react';
import Button from '../button';
import './_article.scss';

const Article = props => (
  <div className="article col-12 col-sm-6 col-lg-4">
  	<img className="article-image" src={props.image} />
  	<h3 className="article-headline">{props.headline}</h3>
  	<p>Lorem ipsum dolor amet copper mug shoreditch synth, letterpress pour-over freegan direct trade enamel pin echo park vegan. Kickstarter slow-carb kale chips cronut hammock ugh, portland taiyaki. Williamsburg hoodie palo santo thundercats mumblecore photo booth, hexagon quinoa fixie chambray direct trade chicharrones. </p>
  	<Button link={'/'} text={'Learn More'} className={'button-primary'}></Button>
  </div> 
);

export default Article;
