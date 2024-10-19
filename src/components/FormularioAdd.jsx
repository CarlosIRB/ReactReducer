const FormularioAdd = () => {
  return (
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Nombre
          <input type="text" className="form-control" />
        </label>
        <label className="mx-1 d-grid gap-2">
          Número
          <input type="text" className="form-control" />
        </label>
        <label className="mx-1 d-grid gap-2">
          <button className="btn btn-info mt-2">Agregar</button>
        </label>
      </div>
    </>
  );
};

export default FormularioAdd;
