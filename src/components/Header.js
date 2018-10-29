import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Icon
          name="american sign language interpreting"
          size="large"
          style={{ color: 'white' }}
        />
      </header>
    );
  }
}

export default Header;
