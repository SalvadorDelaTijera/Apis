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
      <h2>Apis info</h2>
      <div>
      {
        dataApi?.entries?.map((API)=>{
         return(
          <ul key={API.AdoptAPet}>
          <li key={API}>{API.AdoptAPet}</li>
         <li>{API.category}</li>
         <li>{API.description}</li>
         <li>{API.link}</li>
        </ul>
         )

        })
      }
      </div>

    </>
  );
};

export default Datos;
