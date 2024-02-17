
const Datos = ({name, last, mail, cel, tel, gene, edad, foto}) => {


  return (
    <>

      <div>
        <div>
          <img src={foto} alt=''/>
        </div>
        <h3> {name} {last}</h3>
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