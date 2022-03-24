import logo from './quasar.png';
import './App.css';

function App() {
  return (
    <div className="App">
	  <header className="App-header">
          <p> GrittEd </p>
	  </header>
	  <body className="App-body">
	  <button className="App-button">Start Gritting</button>
	  </body>
	  <footer className = "App-footer">
          <p>grittEd is brought to you by </p>
	  <img src={logo} className="App-footer-logo" alt="logo" />
          </footer>
    </div>
  );
}

export default App;
