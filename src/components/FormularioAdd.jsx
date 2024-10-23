import {useState} from "react";
import { v4 as uuid } from 'uuid';

const FormularioAdd = ({dispatch}) => {

const [data, setData] = useState({nombre:"", numero:""});

const {nombre, numero} = data;

const handleChange = (e) => {
  setData({
    ...data,
    [e.target.name]: e.target.value
  });
}

const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      nombre,
      numero,
    }
  };

  const handleAdd = () => {
    //utilizo el dispatch para enviar la accion al reducer
    dispatch(actionAdd);
    setData({nombre:"", numero:""});
  }


  return (
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Nombre
          <input type="text" className="form-control" 
          onChange={handleChange}
          name="nombre"
          value={nombre}/>
        </label>
        <label className="mx-1 d-grid gap-2">
          Número
          <input type="text" className="form-control" 
          onChange={handleChange}
          value={numero}
          name="numero"/>
        </label>
        <label className="mx-1 d-grid gap-2">
          <button className="btn btn-info mt-2"
          onClick={handleAdd}>Agregar</button>
        </label>
      </div>
    </>
  );
};

export default FormularioAdd;
