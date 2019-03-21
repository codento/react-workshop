import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Button from './Button';
import Loader from 'react-loader-spinner';

const apiUrl = 'https://koira-api.herokuapp.com/api/v1/dogs'

const App = () => {
  const [ dogs, setDogs ] = useState([])
  const [ likes, setLikes ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const fetchDogs = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    setDogs(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchDogs()
  }, [])

  const callback = (liked) => {
    liked && setLikes(likes.concat(dogs[0]))
    setDogs(dogs.slice(1))
  }

  return (
    <div className="container">
      <Header />
      { loading
        ? (<div className="content">
            <Loader 
              type="Hearts" 
              color="#DB162F"
              height={200} 
              width={200}/>
          </div>)
        : <Content pet={ dogs.length >= 1
          ? dogs[0]
          : { imageUrl: "https://i.imgur.com/fS1Mn0V.jpg", title: "No moar doggos" } }/> }

      <Footer>
        <Button onClick={() => callback(false)} icon="heart-broken" background="danger" />
        <Button onClick={() => callback(true)} icon="heart" background="primary" />
      </Footer>
    </div>
  )
}

export default App;