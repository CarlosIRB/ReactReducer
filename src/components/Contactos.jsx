import TablaContactos from './TablaContactos';
import FormularioAdd from './FormularioAdd';
import { useReducer } from 'react';
import { ContactosReducer } from "../reducers/ContactosReducer";

const Contactos = () => {


//datos de prueba
const contactos = [
    {id: "11", nombre: 'Juan Pérez', numero: '1234567890'},
    {id: "12", nombre: 'María López', numero: '0987654321'},
    {id: "13", nombre: 'Pedro Martínez', numero: '6789054321'},
    {id: "14", nombre: 'Ana Jiménez', numero: '1234509876'}
]
const [state, dispatch] = useReducer(ContactosReducer, contactos);

  return (
    <>
        <div className="container mt-3">
            <FormularioAdd dispatch={dispatch}></FormularioAdd>
            <TablaContactos contactos={state}></TablaContactos>
        </div>
    </>
  )
}

export default Contactos;