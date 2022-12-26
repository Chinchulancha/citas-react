import { useState, useEffect } from "react";
import Formulario from "./components/Formulario.jsx";
import Header from "./components/Header.jsx";
import ListadoPacientes from './components/ListadoPacientes.jsx'
import swal from "sweetalert";

function App() {
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const[pacientes, setPacientes]=useState(INITIAL);
  const[paciente, setPaciente] = useState({});
 
 
  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto">
      <Header
        
      />

      <div className="mt-5 md:flex">
      <Formulario
        pacientes={pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
        swal = {swal}
      />
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
        swal = {swal}
      />
      </div>
    </div>
  )
}

export default App
