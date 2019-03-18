import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Hei maailma!</p>
        <Footer />
      </div>
    )
  }
}

export default App;