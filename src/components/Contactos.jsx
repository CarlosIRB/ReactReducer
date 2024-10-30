import TablaContactos from "./TablaContactos";
import FormularioAdd from "./FormularioAdd";
import { useReducer, useEffect, useState } from "react";
import { ContactosReducer } from "../reducers/ContactosReducer";

const init = () => {
  const contactos = localStorage.getItem("contactos");
  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init);
  const [formView, setFormView] = useState(false);
  const [contactoEditar, setContactoEditar] = useState(null);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const handleEdit = (contacto) => {
    setContactoEditar(contacto);
    console.log(contactoEditar);
    setFormView(true);
  };

  return (
    <div className="container mt-3">
      <button
        onClick={() => {
          setFormView(!formView);
          setContactoEditar(null);
        }}
        className="btn btn-success"
      >
        {!formView ? "+ Agregar Contacto" : "- Cerrar Formulario"}
      </button>
      {formView && <FormularioAdd dispatch={dispatch} contactoEditar={contactoEditar} />}
      <TablaContactos contactos={state} dispatch={dispatch} onEdit={handleEdit} />
    </div>
  );
};

export default Contactos;
