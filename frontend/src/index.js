import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css'
import App from './App';


import RecoilLogger from "recoil-logger";
import { RecoilRoot } from "recoil";

ReactDOM.render(

  <RecoilRoot>
    <RecoilLogger />
    <App />
  </RecoilRoot>
  ,
  document.getElementById("root")
);