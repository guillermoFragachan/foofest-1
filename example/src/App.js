import logo from './logo.svg';
import './App.css';
import {OpeningPage} from './pages/OpeningPage';
import {BookingPage} from './pages/BookingPage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
   

   <Router>
      <div>
        <Switch>
          <Route path="/" exact component={OpeningPage} />
          <Route path="/booking/:name" component={BookingPage} />
          {/* <Route path="/page2" component={Page2} /> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
