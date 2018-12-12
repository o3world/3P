import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () =>
    <footer className="footer">
        <h3>This is the footer</h3>

        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/the-feed">The Feed</Link></li>
              <li><Link to="/editors">Editors</Link></li>
              <li><Link to={'/sponsored-series'}>Sponsored Series</Link></li>
            </ul>
        </nav>
    </footer>;

export default Footer;