import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [ pets, setPets ] = useState([])
  useEffect(() => {
    console.log('Test')
  })
  return (
    <div className="container">
      <Header />
      <p className="content">Hei maailma!</p>
      <Footer />
    </div>
  )
}

export default App;
