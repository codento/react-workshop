import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [ pets, setPets ] = useState([])
  return (
    <div className="container">
      <Header />
      <p className="content">Hei maailma!</p>
      <Footer />
    </div>
  )
}

export default App;
