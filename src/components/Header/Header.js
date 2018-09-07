import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = (props) =>
    <header className="header">
        <h1>{props.site_title}</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/stories">Stories</Link></li>
                <li><Link to="/the-feed">The Feed</Link></li>
                <li><Link to="/editors">Editors</Link></li>
            </ul>
        </nav>
    </header>

export default Header;