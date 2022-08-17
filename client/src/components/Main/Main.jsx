import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from '../../pages/Cart.jsx';
import Products from '../Products/Products.jsx';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/Cart' element={<Cart/>} />
      <Route exact path='/' element={<Products/>} />
    </Routes>
  );
}


export default Main;
