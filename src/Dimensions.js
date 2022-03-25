import logo from './quasar.png';
import robot from './robot.png';
import {Link} from "react-router-dom";
import './App.css';

function Dimensions() {
  return (
    <div className="App">
	  <header className="App-header">
        <p> GrittEd </p>
	  </header>
	  <body className="App-body">
	    <p className = "App-para"> Ensure your grittEd device is situated in the bottom left hand corner of the rectangle you want to grit as shown in the diagram. </p>
	    <img src={robot} className="App-robot" alt="robot" />
	    <p className = "App-para"> Enter the dimensions of the rectangle in meters below and then press start to start gritting. </p>
	    <p className="App-input-layout"> Enter X:  <input className = "App-input"/>  Enter Y: <input className = "App-input"/> </p>
	    <p> </p>
		<Link to="/timer">
          <button className="App-button">Start Gritting</button>
        </Link>
	  </body>
	  <footer className = "App-footer">
        <p>grittEd is brought to you by </p>
	    <img src={logo} className="App-footer-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default Dimensions;
