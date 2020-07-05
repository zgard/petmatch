import React from 'react';
import './App.css';
import logo from './petmatchlogo.png';
import Pettype from './components/pettype';
import Dogsizes from './components/dogsizes';
import BigBoldDog from './components/bigbolddogs';
import MediumDog from './components/mediumdog';
import LapSizeDog from './components/lapsizedog';
import TinyDog from './components/tiny';
import Cattypes from './components/cattypes';
import BigKindCat from './components/bigkindcat';
import SassyCat from './components/sassycat';
import Hypoallergenic from './components/hypocat';
import Exotic from './components/exotic';
import { Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <div className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        </div>
        <div className="App">
        <Route
          exact
          path="/"
          component={Pettype} />
        <Route 
          path="/dogsizes" 
          component={Dogsizes} />
        <Route 
          path="/cattypes" 
          component={Cattypes} />
        <Route 
          path="/bigbolddogs" 
          component={BigBoldDog} />
        <Route 
          path="/mediumdog" 
          component={MediumDog} />
        <Route 
          path="/lapsizedog" 
          component={LapSizeDog} />
        <Route 
          path="/tiny" 
          component={TinyDog} />
        <Route 
          path="/bigkindcat" 
          component={BigKindCat} />
        <Route 
          path="/sassycat" 
          component={SassyCat} />
        <Route 
          path="/hypocat" 
          component={Hypoallergenic} />
        <Route 
          path="/exotic" 
          component={Exotic} />
        </div>
      </div>
  );
}

export default App;
