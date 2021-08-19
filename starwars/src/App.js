import React, {useState} from 'react';
import './App.css';
import PeopleList from './components/PeopleList';

// Step3 import { Switch } from 'react-router-dom';

import { Switch, Route, Link} from 'react-router-dom';
import FilmsList from './components/FilmsList';
import Home from './components/Home';
//Step6 import axios 


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch charactersn and films from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
  {/* Step5 create links */}
      <nav>
         <div className="nav-links">

        <Link to="/">PeopleList</Link>


        <Link to="/FilmsList">FilmsList</Link>

          </div>
      
    </nav> 

    {/* Step4 create route */}

    <Switch>
    <Route path="/" component={Home} />

    <Route path="/Films">
      <FilmsList /> 
    </Route>

    <Route path="/People">
      <PeopleList /> 
    </Route>

    </Switch>

  
    </div>
  );
}



export default App;
