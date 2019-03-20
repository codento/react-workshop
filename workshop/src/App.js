import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Button from './Button';

const apiUrl = 'https://koira-api.herokuapp.com/api/v1/dogs'

const App = () => {
  const [ dogs, setDogs ] = useState([])
  const [ likes, setLikes ] = useState([])

  const fetchDogs = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    setDogs(data)
  }

  useEffect(() => {
    fetchDogs()
  }, [])



  const callBack = (liked) => {
    liked && setLikes(likes.concat(dogs[0]))
    setDogs(dogs.slice(1))
  }

  return (
    <div className="container">
      <Header />
      <Content pet={ dogs.length >= 1 ? dogs[0] : {title: "No moar doggos"} }/>
      <Footer>
        <Button onClick={() => callBack(false)} icon="heart-broken" background="danger" />
        <Button onClick={() => callBack(true)} icon="heart" background="primary" />
      </Footer>
    </div>
  )
}

export default App;