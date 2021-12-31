import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CharacterDetail.css";
import {useSelector, useDispatch} from 'react-redux';
import {characterDetail} from '../../redux/actions.jsx';

function CharacterDetail(props) {
  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */

    let params = useParams();
    console.log(params)
    
    let detalles = useSelector(state => state.detallePersonaje);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(characterDetail(params.id))}, []);

  return (
    <div className="CharacterDetail">
      {/*Aqui crearemos una lista de detalles de cada personaje*/}
      {/*<img className="CharacterDetail__Photo" src="" alt="" />*/}
      <ul>
      {detalles.map(d =>
        
         <li key={d.char_id}>
         Name: {d.name}<br/>
         Bithday: {d.birthday}<br/>
         Nickname: {d.nickname}
         </li>

         


        )
      }
      </ul>

    </div>
  );
}

export default CharacterDetail;
