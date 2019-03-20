import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import Content from './Content';
import Button from './Button';

const apiUrl = 'https://koira-api.herokuapp.com/api/v1/dogs'

const App = () => {
  const [ dogs, setDogs ] = useState([])

  const fetchDogs = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    setDogs(data)
  }

  useEffect(() => {
    fetchDogs()
  }, [])

  return (
    <div className="container">
      <Header />
      <div className='section' style={{ height: 'calc(100vh - 300px)'}}>
        <Counter />
      </div>
      <Footer>
        <Button icon="heart-broken" background="danger" />
        <Button icon="heart" background="primary" />
      </Footer>
    </div>
  )
}

export default App;