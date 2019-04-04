import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import tp_logo from '../../assets/images/triplepundit_logos.png';

const year = new Date().getFullYear();

const Footer = () =>
  <footer className={styles.footer}>
    <div className={styles.content}>
      <Link to={'/'}>Home</Link>
      <Link to={'/stories'}>Stories</Link>
      <Link to={'/sponsored-series'}>Sponsored Series</Link>
      <Link to={'/the-feed'}>The Feed</Link>
      <a target={'_blank'} rel={'noopener noreferrer'} href={'http://www.3blforum.com/brands-taking-stands-newsletter'}>Brands Taking Stands</a>
      <a target={'_blank'} rel={'noopener noreferrer'} href={'http://www.3blassociation.com/insights/magazines'}>CR Magazine</a>
      <a target={'_blank'} rel={'noopener noreferrer'} href={'http://www.3blforum.com/'}>3BL Forum</a>
    </div>
    <div className={styles.contact}>
      <Link to={'/editors'}>Meet Our Editors</Link>
      <Link to={'/archive'}>Archive</Link>
      <a href={'https://contact.triplepundit.com/'} target={'_blank'} rel={'noopener noreferrer'}>Contact Us</a>
      <a href={'https://www.facebook.com/3blmediatriplepundit'}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
      <a href={'http://twitter.com/triplepundit'}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      <a href={'http://www.linkedin.com/groups/1842706'}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
    </div>
    <div className={styles.logos}>
      <img src={tp_logo} alt={'3BL logo'}/>
    </div>
    <div className={styles.legal}>
      <p><a href={'https://www.3blmedia.com/sites/www.3blmedia.com/files/pdf/3BL_Media_privacy_policy.pdf'}>Privacy Policy</a></p>
      <p>&copy; {year} 3BL Media & TriplePundit. All rights reserved.</p>
    </div>
  </footer>;

export default Footer;
