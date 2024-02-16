import React from 'react'
import Datos from './Datos/Datos'
import { useState, useEffect } from 'react';

const App = () => {
  const [dataApi, setDataApi] = useState();// se inicializa con vacio el estado de dataApi
  
  const handlerData = async () => {// se hace la funcion asincronica para esperar  la repsuest ad ela promise
    let resp = await fetch("https://api.publicapis.org/entries");
    resp = await resp.json(); // pasamos la respuest a json
    setDataApi(resp);// se actualiza el valor de dataAPI
  };

  useEffect(() => {
    handlerData();
  }, []); // se deja los corchetes vacios paar que no se haga un bulce infinito

  //console.log(dataApi);
  return (
    <>
     <h1>Apis info</h1>
     <Datos name ="ihgigiuiu" cat = 'categoria' desc= 'descripcion' link = 'link' />

      <div>
      {
        dataApi?.entries?.map((API)=>{
         return(
          <ul >
          <h3>{API.API}</h3>
         <li>categoria: {API.Category}</li>
         <li>descripción: {API.Description}</li>
         <a href="">{API.Link}</a>
        </ul>
         )
        })
      }
      
      </div>

    </>
  )
}

export default App
    //<Datos name = {API.API} cat = {API.Category} des ={API.Description} link = {API.Link} />
