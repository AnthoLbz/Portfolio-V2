import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import imageBG from './images/Web 1920 – 1.svg'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import imageCar from "./images/324240650359211.webp";
import './fonts/astron-boy.video.ttf'
import './fonts/astron-boy.regular.ttf'
import './fonts/LunaticSuperstar-8KgB.otf'

ReactDOM.render(
  <BrowserRouter>
    <App />
    <img src={imageBG} alt="Background" />
    <div className="graph-container">
      <div className="graph" />
      <img className="imgCar" src={imageCar} alt="car" />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
