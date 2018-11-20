import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo__large from '../../assets/images/3P_Logo_Homepage_Large.png';

const Header = (props) =>
    <header className="header">

      <img className={'header-logo'} src={logo__large} alt={'3bl logo'} />
      <FontAwesomeIcon className={'search-button'} icon={"search"} />
      <FontAwesomeIcon className={'hamburger-button'} icon={"bars"} />
    </header>

export default Header;