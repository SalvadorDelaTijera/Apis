import React from 'react'
import { useState } from 'react'

const AdoptAPet = ({apis}) => {

  return (
    <div>
      <h1>APIS info</h1>
      {
        apis?.entries?.map((API)=>{
          return(
            <ul>
            <h3>{API.API}</h3>
            <li>catego: {API.Category}</li>
            <li>descrip: {API.Description}</li>
            <a href={API.Link}>{API.Link}</a>
          </ul>
          );
        })
      }
    </div>
  )
}

export default AdoptAPet