import styles from './Header.module.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import logo__large from '../../assets/images/3P_Logo_Homepage_Large.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }


  render() {
    return (
      <header className={styles.wrapper}>
        <Link to={'/'}><img className={styles.logo} src={logo__large} alt={'3bl logo'} /></Link>
        <h1>{styles.wrapper}</h1>
        <h1>{styles.logo}</h1>
      </header>
    )
  }
}

export default Header;