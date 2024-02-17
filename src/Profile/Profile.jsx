import React from 'react'

const Profile = ({imagen, id, nombre, origen, especie,status}) => {
  
  return (
    <div>
      <img src={imagen} alt="" />
      <h3>Nombre: {nombre}</h3>
      <h5>Id: {id}</h5>
      <p>Lugar de Origen: {origen}</p>
      <p>Especie: {especie}</p>
      <p>Status: {status}</p>

    </div>
  )
}

export default Profile