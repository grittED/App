import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import CountDownTimer from './CountDownTimer';
import Dimensions from './Dimensions';
import End from './End';
import reportWebVitals from './reportWebVitals';
import Timer from './Timer'
import logo from './quasar.png';


const Routing = () => {
  return(
    
    <Router>
      <Routes>
        <Route path="/" exact element={<App/>} />
        <Route path="/countDown" element={<CountDownTimer/>} />
        <Route path="/dimensions" element={<Dimensions/>} />
        <Route path="/end" element={<End/>} />
        <Route path="/vitals" element={<reportWebVitals/>} />
        <Route path="/timer" element={<Timer/>} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
