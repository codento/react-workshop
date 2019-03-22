import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Button from './Button';

const App = () => {
  const [ pets, setPets ] = useState([]);
  const [ index, setIndex ] = useState(0);

  useEffect(() => {
    fetchPets()
  }, [])

  const fetchPets = async () => {
    const apiUrl = 'https://koira-api.herokuapp.com/api/v1/dogs';
    const response = await fetch(apiUrl);
    const data = await response.json();
    setPets(data)
  }

  const handleClick = () => {
    setIndex(index + 1)
  }

  return (
    <div className="container">
      <Header />
      {pets[0] && <Content title={pets[index].title} imageUrl={pets[index].imageUrl} />}
      <Footer>
        <Button onClick={handleClick} icon="heart-broken" />
        <Button onClick={handleClick} icon="heart" />
      </Footer>
    </div>
  )
}

export default App;
