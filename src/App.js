import logo from './quasar.png';
import gritted from './gritted.png';
import {Link} from "react-router-dom";
import React from 'react';
import met from "./met.json";
import raw from './raw.txt';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
        "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/353771?res=3hourly&key=426ec8ce-b9e7-4dae-a68f-6b89aa427dc5")
        .then(res => res.json())
        .then(json => this.setState({
                data: json,
                DataisLoaded: true
            }));
      }

  // componentDidMount() {
  //   fetch(raw)
  //   .then(r => r.text())
  //   .then(text => {
  //     this.setState({
  //                     data: [1,2,4],
  //                     DataisLoaded: true,
  //                 });
  //   });
  // }

  render() {
    const {DataisLoaded, data} = this.state;
    if (!DataisLoaded) return <div>
    <h1> Please wait some time.... </h1>
    </div> ;

    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var timeNow = (hours * 60) + minutes;

    // let data = require('./met.json');

    for (let i = 0; i < data.SiteRep.DV.Location.Period.at(0).Rep.length; i++) {
      if (data.SiteRep.DV.Location.Period.at(0).Rep.at(i).T <= 0) {
        return warnRender(data.SiteRep.DV.Location.Period.at(0).Rep.at(i).T,
        data.SiteRep.DV.Location.Period.at(0).Rep.at(i).$,
        data.SiteRep.DV.Location.Period.at(0).Rep.at(i).$ - timeNow);
      }
    }

    for (let i = 0; i < 8; i++) {
      if (data.SiteRep.DV.Location.Period.at(1).Rep.at(i).T <= 0) {
        return warnRender(data.SiteRep.DV.Location.Period.at(1).Rep.at(i).T,
        data.SiteRep.DV.Location.Period.at(1).Rep.at(i).$,
        data.SiteRep.DV.Location.Period.at(1).Rep.at(i).$ - timeNow + 1440);
      }
    }
    
    if (!DataisLoaded) return <div>
    <h1> Please wait some time.... </h1>
    </div> ;

    if (DataisLoaded) return noWarnRender();

    
    noWarnRender();
    
}
}

function warnRender(temp, freezeTime, timeUntilFreeze) {
  if (timeUntilFreeze <= 0) {
    return superWarning();
  }


  return (
    <div className="App">
      <header className="App-header">
            <img src={gritted} className="App-logo" alt="gritted" />
      </header>

      <body className="App-body">
        <p>{temp} {freezeTime} {timeUntilFreeze}</p>
        <Link to="/dimensions">
          <button className="App-button">WARNING</button>
        </Link>
      </body>

      <footer className = "App-footer">
        
        <p>GrittEd is brought to you by </p>
        <img src={logo} className="App-footer-logo" alt="logo" />
      </footer>
    </div>
  );
}

function superWarning () {
  return (
    <div className="App">
      <header className="App-header">
            <img src={gritted} className="App-logo" alt="gritted" />
      </header>

      <body className="App-body">
        <Link to="/dimensions">
          <button className="App-button">SUPER WARNING</button>
        </Link>
      </body>

      <footer className = "App-footer">
        <p>GrittEd is brought to you by </p>
        <img src={logo} className="App-footer-logo" alt="logo" />
      </footer>
    </div>
  );
}

function noWarnRender () {
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
