import React, { Component } from 'react';

class Footer extends Component {
  state = {
    clickedCount: 0,
  };

  handleClick = e => {
    let { clickedCount } = this.state;
    this.setState({ clickedCount: clickedCount + 1 });
  };

  render() {
    return (
      <div className="footer" onClick={this.handleClick}>
        <p>{this.state.clickedCount}</p>
      </div>
    );
  }
}

export default Footer;
