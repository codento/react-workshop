import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter'

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className='section' style={{ height: 'calc(100vh - 300px)'}}>
        <p>Hei maailma!</p>
      </div>
      <Footer />
    </div>
  )
}

export default App;