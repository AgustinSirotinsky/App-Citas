import React,{Fragment} from "react";
import './components.css';

function Citas(paciente){
  console.log(paciente)
    return (
      <Fragment>
        <div className="cita">
            <p>Mascota: <span>{paciente.mascota}</span></p>
            <p>Dueño: <span>{paciente.duenio}</span></p>
            <p>Fecha: <span>{paciente.fecha}</span></p>
            <p>Hora: <span>{paciente.hora1}</span></p>
            <p>Sintomas: <span>{paciente.sintomas1}</span></p>
            <button className="button eliminar u-full-width" onClick={console.log(paciente.sintomas1)}>Eliminar ×</button>
        </div>
      </Fragment>
    );
  }
  
export default Citas;