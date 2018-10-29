import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <p className="stuff">Some other stuff!</p>
        <Footer />
      </div>
    );
  }
}

export default App;
