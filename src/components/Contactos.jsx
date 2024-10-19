import TablaContactos from './TablaContactos';
import FormularioAdd from './FormularioAdd';

const Contactos = () => {
//datos de prueba
const contactos = [
    {id: 1, nombre: 'Juan Pérez', numero: '1234567890'},
    {id: 2, nombre: 'María López', numero: '0987654321'},
    {id: 3, nombre: 'Pedro Martínez', numero: '6789054321'},
    {id: 4, nombre: 'Ana Jiménez', numero: '1234509876'}
]

  return (
    <>
        <div className="container mt-3">
            <FormularioAdd></FormularioAdd>
            <br />
            <hr />
            <br />
            <TablaContactos contactos={contactos}></TablaContactos>
        </div>
    </>
  )
}

export default Contactos;