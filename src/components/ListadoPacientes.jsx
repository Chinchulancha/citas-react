import Paciente from './Paciente.jsx'

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente, swal}) {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

        <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-green-600 font-bold">Pacientes y Citas</span></p>
  
        {pacientes.map ((paciente) => (
          
            <Paciente
              key={paciente.id}
              paciente = {paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
              swal = {swal}
            />
          
            ))} 
         </>  
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center first-letter:uppercase">comienza agregando <span className="text-green-600 font-bold">para empezar</span></p>
        </>
      )}
      

      
    </div>
  )
}

export default ListadoPacientes