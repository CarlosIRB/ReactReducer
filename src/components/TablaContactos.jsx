import PropTypes from "prop-types";

const TablaContactos = ({ contactos = [], dispatch, onEdit }) => {

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Número</th>
          <th>Sexo</th>
          <th>Edad</th>
          <th>Cumpleaños</th>
          <th>Imagen</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((contacto) => (
          <tr key={contacto.id}>
            <td>{contacto.id.split("-")[0]}</td>
            <td>{contacto.nombre}</td>
            <td>{contacto.numero}</td>
            <td>{contacto.sexo}</td>
            <td>{calcularEdad(contacto.cumpleanos)}</td>
            <td>{contacto.cumpleanos}</td>
            <td><img src={contacto.imagen} alt="avatar" style={{ width: "50px", height: "50px" }} /></td>
            <td>
              <button className="btn btn-warning mx-1" onClick={() => onEdit(contacto)}>
                <i className="fa-solid fa-pen"></i>
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(contacto.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TablaContactos.propTypes = {
  contactos: PropTypes.array.isRequired,
};

export default TablaContactos;
