import logo from './quasar.png';
import { Link} from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
            <p> GrittEd </p>
      </header>

      <body className="App-body">
        <Link to="/end">
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


