import App from "../App";

const Datos = (nom, ape, mail, cel, tel, gene, edad) => {


  return (
    <>

      <div>
        <h3>Name: {nom}</h3>
        <p>Email: {mail} </p>
        <p>Cel number: {cel}</p>
        <p>Phone Number: {tel}</p>
        <p>Gender: {gene}</p>
        <p> Age: {edad}</p>

      </div>


    </>
  );
};

export default Datos;
//CREAR UN CMPONNTE QUE MUETSRE LA LISTA POR PROPS pero solo de AdoptAPèt
/**
 * <h3>{name}</h3>
      <p>Categoría: {cat}</p>
      <p>Descripción: {desc}</p>
      <a href={link}>{link}</a>
 */