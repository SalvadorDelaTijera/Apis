

const Datos = ({name, cat, desc, link}) => {


  return (
    <>

<div>
      <h3>{name}</h3>
      <p>Categoría: {cat}</p>
      <p>Descripción: {desc}</p>
      <a href={link}>{link}</a>
    </div>
     

    </>
  );
};

export default Datos;
//CREAR UN CMPONNTE QUE MUETSRE LA LISTA POR PROPS pero solo de AdoptAPèt
