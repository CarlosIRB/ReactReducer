import PropTypes from "prop-types";

const TablaContactos = ({ contactos = [] }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Número</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => {
            const finalId = contacto.id.split("-")[0];
            return (
              <tr key={contacto.id}>
                <td>{finalId}</td>
                <td>{contacto.nombre}</td>
                <td>{contacto.numero}</td>
                <td>
                  <button className="btn btn-danger">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

TablaContactos.propTypes = {
  contactos: PropTypes.array.isRequired,
};

export default TablaContactos;
