import logo from './quasar.png';
import {useState} from 'react';
import robot from './robot.png';
import gritted from './gritted.png';
import {Link} from "react-router-dom";
import './App.css';

function Dimensions({xSetter, ySetter}) {
	const updateValues = () => {
		xSetter(x);
		ySetter(y);
	}
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

  return (
    <div className="App">
	  <header className="App-header">
         <img src={gritted} className="App-logo" alt="gritted" />
	  </header>
	  <body className="App-body">
	    <p className = "App-para"> Ensure your GrittEd device is situated in the bottom left hand corner of the rectangle you want to grit as shown in the diagram. </p>
	    <img src={robot} className="App-robot" alt="robot" />
	    <p className = "App-para"> Enter the dimensions of the rectangle in meters below and then press start to start gritting. </p>
	    <p className="App-input-layout"> Enter X:  <input className="App-input" onChange={evt => setX(evt.target.value)}/>  Enter Y: <input className="App-input" onChange={evt => setY(evt.target.value)}/> </p>
	    <p> </p>
		<Link to='/timer'>
          <button className="App-button" onClick={updateValues}>Start Gritting</button>
        </Link>
	  </body>
	  <footer className = "App-footer">
        <p>GrittEd is brought to you by </p>
	    <img src={logo} className="App-footer-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default Dimensions;
