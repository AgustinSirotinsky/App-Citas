import React,{Fragment} from "react";

function Ingresos(paciente){
    return (
      <Fragment>
        <div className="cita">
            <p>Mascota: <span>{paciente.nombre}</span></p>
            <p>Dueño: <span>{paciente.dueno}</span></p>
            <p>Fecha: <span>{paciente.fecha}</span></p>
            <p>Hora: <span>{paciente.hora}</span></p>
            <p>Sintomas: <span>{paciente.sintomas}</span></p>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
      </Fragment>
    );
  }
  
  export default Ingresos;