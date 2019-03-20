import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter'

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
      <Footer />
    </div>
  )
}

export default App;