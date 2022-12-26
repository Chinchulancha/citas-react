import {useState, useEffect} from 'react'
import Paciente from './Paciente';
import Error from './Error';

function Formulario({pacientes, setPacientes, paciente, setPaciente, swal}) {
  

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      const {nombre, propietario, email, fechaAlta, sintomas} = paciente

      setNombre(nombre)
      setPropietario(propietario)
      setEmail(email)
      setFechaAlta(fechaAlta)
      setSintomas(sintomas)
    }
  }, [paciente])


  const generarId = () => {
    const random0 = Math.random().toString(36).substring(2);
    const random1 = Date.now().toString(36)

    return random0 + random1
  }

  function asignarValueInputs(e){
    if(e.target.id == 'mascota'){
      setNombre(e.target.value)
    }
    else if(e.target.id == 'propietario'){
      setPropietario(e.target.value)
    }
    else if(e.target.id == 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.id == 'alta'){
      setFechaAlta(e.target.value)
    }
    else{
      setSintomas(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validacion del Form
    if([nombre, propietario, email, fechaAlta, sintomas].includes('')){
      setError(true)

      return;
    }

    setError(false)

    const objPacientes = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas,
    }

    if(paciente.id){
      //Editando registro

      objPacientes.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPacientes : pacienteState)

      setPacientes(pacientesActualizados)

      swal("Haz editado el paciente con éxito!", {
        icon: "success",
      });

      setPaciente({})
    }else{
      //Nuevo registro
      objPacientes.id = generarId()
      setPacientes([...pacientes, objPacientes])
    }

   

    //Reiniciar el FORM
    setNombre('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>

        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y <span className="text-green-600 font-bold">Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white text-black shadow-md rounded-lg py-10 px-5 mb-10">
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

            <input type="text" name="mascota" id="mascota" value={nombre} onChange={asignarValueInputs} placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block  text-gray-700 uppercase font-bold">Nombre Propietario</label>

            <input type="text" name="propietario" value={propietario} onChange={asignarValueInputs} id="propietario" placeholder="Nombre de el propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo Electronico</label>

            <input type="email" name="email" id="email" value={email} onChange={asignarValueInputs} placeholder="Email  " className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>

            <input type="date" name="alta" id="alta" value={fechaAlta} onChange={asignarValueInputs} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>

          <div className="mb-7">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Motivos de la consulta</label>

            <textarea name="sintomas" id="sintomas" value={sintomas} onChange={asignarValueInputs} cols="30" rows="10" placeholder="Sintomas del paciente" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
          </div>

          {error && <Error mensaje='Todos los campos son obligatorios'/>}

          <input type="submit"  value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold duration-1000 cursor-pointer hover:bg-indigo-700"/>
        </form>
    </div>
  )
}

export default Formulario