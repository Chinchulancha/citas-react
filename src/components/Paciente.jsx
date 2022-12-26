function Paciente ({paciente, setPaciente, eliminarPaciente, swal}){
  const {nombre, propietario, email, fechaAlta, sintomas, id} = paciente
  
  const handleEliminar = () => {
    swal({
      title: 'Eliminar',
      text: 'Estas Seguro de que deseas eliminar este paciente?',
      icon: 'warning',
      buttons: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Haz eliminado el paciente con éxito!", {
          icon: "success",
        });

        eliminarPaciente(id)
      }
    });
  }
  
  return (
    <>
      <div className="mx-5 my-10 bg-white shadow-md py-5 px-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case first-letter:uppercase">{nombre}</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case first-letter:uppercase">{propietario}</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">{fechaAlta}</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>

        <div className="mt-10">
          <button onClick={() => setPaciente(paciente)} type="button" className="bg-indigo-600 py-2 px-4 text-white font-semibold rounded mr-5 hover:bg-indigo-800 uppercase">
            Editar
          </button>

          <button type="button" onClick={handleEliminar} className="bg-red-600 py-2 px-3 text-white font-semibold rounded hover:bg-red-800 uppercase">
            Eliminar
          </button>
        </div>
      </div>  
    </>
  )
}

export default Paciente;