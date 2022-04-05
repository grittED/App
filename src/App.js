import logo from './quasar.png';
import gritted from './gritted.png';
import {Link} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <img src={gritted} className="App-logo" alt="gritted" />
      </header>

      <body className="App-body">
        <Link to="/dimensions">
          <button className="App-button">Start Gritting</button>
        </Link>
      </body>

      <footer className = "App-footer">
        <p>GrittEd is brought to you by </p>
        <img src={logo} className="App-footer-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
