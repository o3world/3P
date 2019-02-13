import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from './PageTemplate.module.scss'

const PageTemplate = (props) =>
  <div className={styles.wrapper}>
    <Header/>
    {props.children}
    <Footer/>
  </div>;

export default PageTemplate;