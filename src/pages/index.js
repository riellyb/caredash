import React from 'react';
import Features from '../components/features';
import Form from '../components/form';
import Hero from '../components/hero';
import './_main.scss';

const IndexPage = props =>
  (<main className="main">
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <Hero src={'https://via.placeholder.com/3000x2000'}></Hero>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <Form></Form>
          </div>
        </div>
      </div>
    </section>
    <Features />
      
      
    
  </main>);

export default IndexPage;