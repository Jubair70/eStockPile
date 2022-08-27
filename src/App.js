import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './components';
import ProductDetails from './components/Product/productDetails';


function App() {
  return (
    <>
    <Header/>
    <section>
    <Routes > 
      <Route exact path={"/"} element={<LandingPage/>} />
      <Route exact path={"/productdetails"} element={<ProductDetails/>} />
    </Routes>
    
    </section>
  
   </>
  );
}

export default App;
