import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from './components/navbar/NavBar.js';
import Home from './components/home/Home.js';
import Characters from './components/characters/Characters.js';
import CharacterDetail from './components/characterDetails/CharacterDetail.js';
import Episodes from './components/episodes/Episodes.js';


function App() {
  return( 
  <div>

    <Route path="/" component={NavBar} />

    <Route exact path="/">
      <Home/>
    </Route>

    <Route exact path="/characters">
      <Characters />
    </Route>

    <Route exact path="/characters/:id">
      <CharacterDetail />
    </Route>

    <Route path="/episodes">
      <Episodes />
    </Route>
  </div>
  );
};

export default App;