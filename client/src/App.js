import React from 'react';
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
