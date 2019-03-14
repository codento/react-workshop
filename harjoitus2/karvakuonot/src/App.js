import React from 'react';
import './App.css'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/common/Main';


const App = () => {
  return (
    <div className="hero ">
    <Header />
    <Main />
    <Footer onAction = { () => {console.log("clickki")}}/>
    </div>)
}

export default App;
