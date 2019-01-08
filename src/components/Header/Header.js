import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo__large from '../../assets/images/3P_Logo_Homepage_Large.png';

const Header = () =>
    <header className={styles.wrapper}>

      <Link to={'/'}><img className={styles.logo} src={logo__large} alt={'3bl logo'} /></Link>
      <FontAwesomeIcon className={styles.searchButton} icon={"search"} />
      <FontAwesomeIcon className={styles.hamburgerButton} icon={"bars"} />
    </header>;

export default Header;