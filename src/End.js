import logo from './quasar.png';
import gritted from './gritted.png';
import './App.css';
import {Link} from "react-router-dom"

function End() {
  return (
    <div className="App">
	  <header className="App-header">
        <img src={gritted} className="App-logo" alt="gritted" />
	  </header>

	  <body className="App-body">
	    <p> Congratulations! </p>
	    <p> Your area is now GrittEd  </p>
	    <p> </p>
		<Link to="/">
	      <button className="App-button">Back to Start</button>
		</Link>
	  </body>

	  <footer className = "App-footer">
        <p>grittEd is brought to you by </p>
	    <img src={logo} className="App-footer-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default End;
