import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";



function Home() {
  /*
  PISTA: podemos usar el hook useEffect para llamar a la api. 
  Que haces useEffect? https://es.reactjs.org/docs/hooks-effect.html
  */

  const [frase, setFrase] = useState([]);
  
  useEffect(
    () => {
      fetch(`https://www.breakingbadapi.com/api/quote/random`)
      .then(res => res.json())
      .then(r => { setFrase(r) }) // el r es un array que contiene al objeto de la frase
    }, [] );

  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />

      <div>{/*Acá deberíamos poner la quote, con sus datos*/}
        <hr/> 
      {frase && frase.map(f => <div key={f.quote_id}>{frase[0].quote}</div>)}
      </div>
    </div>
  );
}

export default Home;