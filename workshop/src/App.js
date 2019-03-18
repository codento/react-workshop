import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className='section' style={{ height: 'calc(100vh - 300px)'}}>
        Hei maailma!</div>
        <Footer />
      </div>
    )
  }
}

export default App;