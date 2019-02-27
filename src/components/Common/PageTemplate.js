import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from './PageTemplate.module.scss'

import { withRouter } from 'react-router'

const HeaderWithRouter = withRouter(Header);

const PageTemplate = (props) =>
  <div className={styles.wrapper}>
    <HeaderWithRouter/>
    {props.children}
    <Footer/>
  </div>;

export default PageTemplate;
