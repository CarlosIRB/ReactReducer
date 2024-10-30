import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const FormularioAdd = ({ dispatch, contactoEditar }) => {
  const [data, setData] = useState(
    contactoEditar || {
      nombre: "",
      numero: "",
      sexo: "",
      cumpleanos: "",
      imagen: "",
    }
  );

  const { nombre, numero, sexo, cumpleanos, imagen } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(contactoEditar);
    if (contactoEditar) {
        setData(contactoEditar);
    }
}, [contactoEditar]);

  const handleSubmit = () => {

    if (nombre && numero && sexo && cumpleanos) {
      
      if (contactoEditar) {
        dispatch({ type: "edit", payload: data }); 
      } else {
        dispatch({ type: "add", payload: { ...data, id: uuid() } }); 
      }
      setData({ nombre: "", numero: "", sexo: "", cumpleanos: "", imagen: "" });
    } else {
      alert("Por favor completa todos los campos");
    }
  };

  return (
    <div className="container">
      <label className="mx-1 d-grid gap-2">
        Nombre
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="nombre"
          value={nombre}
        />
      </label>
      <label className="mx-1 d-grid gap-2">
        Número
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="numero"
          value={numero}
        />
      </label>
      <label className="mx-1 d-grid gap-2">
        Sexo
        <select
          name="sexo"
          className="form-control"
          onChange={handleChange}
          value={sexo}
        >
          <option value="">Selecciona</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </label>
      <label className="mx-1 d-grid gap-2">
        Cumpleaños
        <input
          type="date"
          className="form-control"
          onChange={handleChange}
          name="cumpleanos"
          value={cumpleanos}
        />
      </label>
      <label className="mx-1 d-grid gap-2">
        Imagen (URL)
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="imagen"
          value={imagen}
        />
      </label>
      <button className="btn btn-info mt-2" onClick={handleSubmit}>
        {contactoEditar ? "Modificar" : "Agregar"}
      </button>
    </div>
  );
};

export default FormularioAdd;
