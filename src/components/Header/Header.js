import React from 'react';
import './Header.css';

const Header = (props) =>
    <header className="header">
        <h1>{props.site_title}</h1>
    </header>

export default Header;