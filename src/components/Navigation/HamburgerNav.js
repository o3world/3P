import React from 'react';
import { Link } from 'react-router-dom';

class HamburgerNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"isExpanded": false};
  }

  render() {
    return (
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/stories'}>Stories</Link>
          <Link to={'/sponsored-series'}>Sponsored Series</Link>
          <Link to={'/editors'}>Editors</Link>
          <Link to={'/the-feed'}>The Feed</Link>
        </nav>
    )
  }


}

export default HamburgerNav;