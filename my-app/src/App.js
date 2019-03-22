import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

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
      {pets[0] && <Content title={pets[0].title} imageUrl={pets[0].imageUrl} />}
      <Footer />
    </div>
  )
}

export default App;
