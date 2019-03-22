import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [ pets, setPets ] = useState([])
  
  useEffect(() => {
    fetchDogs()
  }, [])
  
  useEffect(() => {
    console.log('pets: ', pets)
  }, [ pets ])

  const fetchDogs = async () => {
    const apiUrl = 'https://koira-api.herokuapp.com/api/v1/dogs';
    const response = await fetch(apiUrl);
    const data = await response.json();
    setPets(data)
  }

  return (
    <div className="container">
      <Header />
      <p className="content">Hei maailma!</p>
      <Footer />
    </div>
  )
}

export default App;
