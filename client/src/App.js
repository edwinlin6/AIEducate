import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import ImageCarousel from './components/ImageCarousel';
import Input from './components/Input';

function App() {
  return (
    <div id="front">
      <div id="a">
        <NavigationBar></NavigationBar>
      </div>
      <div id='b'>
        <ImageCarousel></ImageCarousel>
      </div>
      <div>
        <Input></Input>
      </div>
        <p>{data.answer}</p>
    </div>
  );
}

export default App;
