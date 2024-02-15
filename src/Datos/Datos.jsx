import React, { useEffect, useState } from "react";

const Datos = () => {
  const [dataApi, setDataApi] = useState();
  const handlerData = async () => {
    let resp = await fetch("https://api.publicapis.org/entries");
    resp = await resp.json();
    setDataApi(resp);
  };
  useEffect(() => {
    handlerData();
  }, []);

  console.log(dataApi);

  return (
    <>

      <h1>Apis info</h1>
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
  );
};

export default Datos;
//CREAR UN CMPONNTE QUE MUETSRE LA LISTA POR PROPS pero solo de AdoptAPèt
