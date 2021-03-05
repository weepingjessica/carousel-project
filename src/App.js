import React, { Component } from "react";
import './styles.css';
import ImagesSlider from './components/imagesSlider';
import { SliderData } from './components/sliderData';
import { render } from "react-dom";

function App() {
  return <ImagesSlider slides={SliderData}/>;

}





  
export default App;
