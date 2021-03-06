import logo from './quasar.png';
import timer from './timer.gif';
import gritted from './gritted.png';
import { useState, useEffect } from 'react';
import CountDownTimer from './CountDownTimer';
import './App.css';

function Timer(xValue) {
  var url = "http://vulpix:8000/move?width="+xValue.xValue+"&height="+xValue.yValue;

  useEffect(() => 
  	fetch(url, { mode: 'no-cors'}),
	[]
  )
	
  const hoursMinSecs = {hours:0, minutes: 0, seconds: 30};
  return (
    <div className="App">
	  <header className="App-header">
        <img src={gritted} className="App-logo" alt="gritted" />
	  </header>
	  <body className="App-body">
	    <img src={timer} className="App-timer" alt="timer" />
	    <CountDownTimer hoursMinSecs={hoursMinSecs}/>
	    <p> Your selected area is being GrittEd </p>
	  </body>
	  <footer className = "App-footer">
        <p>GrittEd is brought to you by </p>
	    <img src={logo} className="App-footer-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default Timer;
