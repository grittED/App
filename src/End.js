import logo from './quasar.png';
import './App.css';

function End() {
   return (
    <div className="App">
	  <header className="App-header">
          <p> GrittEd </p>
	  </header>
	   <body className="App-body">
	   <p> Congratulations! </p>
	   <p> Your area is now grittEd  </p>
	   <p> </p>
	   <button className="App-button">Back to Start</button>
	  </body>
	  <footer className = "App-footer">
          <p>grittEd is brought to you by </p>
	  <img src={logo} className="App-footer-logo" alt="logo" />
          </footer>
    </div>
  );
}

export default End;
