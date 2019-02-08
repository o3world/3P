import React from 'react'

import StoriesMasonryWrapper from '../Stories/StoriesMasonryWrapper'
import PageTemplate from "../Common/PageTemplate"

const the404 = () =>
  <PageTemplate>
    <section>
      <h2>Oops, looks like we couldn't find your page (404).</h2>
      <p>While you're here, read one of these important stories.</p>
    </section>
    <StoriesMasonryWrapper/>
  </PageTemplate>;

export default the404;