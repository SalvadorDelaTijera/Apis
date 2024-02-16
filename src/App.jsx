import React from 'react'
import Datos from './Datos/Datos'
import { useState, useEffect } from 'react';

const App = () => {
const [dataRandom, setDataRandom] = useState();

const random = async()=>{
  let res = await fetch('https://randomuser.me/api/')
  res = await res.json();
  setDataRandom(res);
}

useEffect(()=>{
  random();
  }, [])
  console.log(dataRandom)

  return (
  <>
    <h1>APIS Info</h1>
      {
        dataRandom?.results?.map((Info)=>{
          return(
            <div>
              <div>
              <img src={Info.picture.medium} alt="" />
              </div>
            <ul>
              <h4>name: {Info.name.first} {Info.name.last}</h4>
              <li>email: {Info.email}</li>
              <li>cell: {Info.cell}</li>
              <li>phone: {Info.phone}</li>
               <li>gender: {Info.gender}</li>
               <li>age: {Info.dob.age}</li>

            </ul>
          </div>

          )

        })
      }
  </>
  )
}

export default App


/**APIIII NOMBRES RANDOM
 * <div>
              <div>
              <img src={Info.picture.medium} alt="" />
              </div>
            <ul>
              <h4>name: {Info.name.first} {Info.name.last}</h4>
              <li>email: {Info.email}</li>
              <li>cell: {Info.cell}</li>
              <li>phone: {Info.phone}</li>
               <li>gender: {Info.gender}</li>
               <li>age: {Info.dob.age}</li>

            </ul>
          </div>
 */


 //api de chorros de datos

 //const [dataApi, setDataApi] = useState();// se inicializa con vacio el estado de dataApi

  /*
    const handlerData = async () => {// se hace la funcion asincronica para esperar  la repsuest ad ela promise
    let resp = await fetch("https://api.publicapis.org/entries");
    resp = await resp.json(); // pasamos la respuest a json
    setDataApi(resp);// se actualiza el valor de dataAPI
  };

  useEffect(() => {
    handlerData();
  }, []); // se deja los corchetes vacios paar que no se haga un bulce infinito

  //console.log(dataApi);
   */

/**
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
      se convierto en esto
      para eviar lso parametrs ocmo props
      {
        dataApi?.entries?.map((API)=>{
        return(
          <Datos name={API.API} cat={API.Category} desc={API.Description} link={API.Link}/>
        )
        })
      }
 */