import React from 'react';
import Header from './Header';
import Footer from './Footer';


const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="section" style={{ height: "calc(100vh - 300px)" }}>
        <p> Hei maailma! </p>
      </div>
      {/* <Footer /> */}

<footer className="footer">
  <div>Some Button 1</div>
  <div>Some Button 2</div>
</footer>
    </div>


  )
}

export default App;