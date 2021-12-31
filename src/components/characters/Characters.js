import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./Characters.css";
import {useSelector, useDispatch} from 'react-redux';
import {getCharacters} from '../../redux/actions.jsx';
import CharacterDetail from '../characterDetails/CharacterDetail.js';

function Characters(props) {
  /*
    PISTA:
    La dirección de donde vamos a tomar los datos es
    
    https://www.breakingbadapi.com/api/characters?name=

    Notesé que hay una query en la dirección. Lo que seguirá a esa query será un string 
    con un nombre o un apellido, y en base a eso la api realizará el filtrado.
    En caso de no poner nada en la query, la api traerá a todos los personajes.
  */

  const dispatch = useDispatch();
  useEffect( () => {dispatch(getCharacters())}, [] );
  let personajes = useSelector(state => state.personajes)


  return (
    <div className="Characters">
      <h1>List of Characters</h1>

      {/*
        Aquí vamos a definir el buscador de personajes.
        Debemos crear una SearchBar que contenga un form controlado
      */}

      <ul className="Characters__list">
        {personajes?.map(p =>
          <li key={p.char_id}>
            <Link to={ `/characters/${p.char_id}` } >
              {p.name}
            </Link>
          </li>     
          )}
      </ul>
    </div>
  );
}

export default Characters;
