import React from 'react';
import './Header.css';

import logo__large from '../../assets/images/3P_Logo_Homepage_Large.png';

const Header = (props) =>
    <header className="header">

      <img src={logo__large} alt={'3bl logo'} />
    </header>

export default Header;