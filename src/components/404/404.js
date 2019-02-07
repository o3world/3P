import React from 'react'

import Header from '../Header/Header'
import StoriesMasonryWrapper from '../Stories/StoriesMasonryWrapper'
import Footer from '../Footer/Footer'

const the404 = () =>
    <div>
      <Header/>
      <section>
        <h2>Oops, looks like we couldn't find your page (404).</h2>
        <p>While you're here, read one of these important stories.</p>
      </section>
      <StoriesMasonryWrapper/>
      <Footer/>
    </div>;

export default the404;