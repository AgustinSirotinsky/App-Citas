import React,{Fragment} from "react";
import Citas from "./Citas";
import './components.css';

function AdministrarCita(props){
  console.log(props.citas)
    return (
      <Fragment>
        <div className='administrarCitas'>
          <h2>Administra tus Citas</h2>
          {props.citas.map((cita,index)=><Citas key={index} {...cita}/>)}
        </div>
      </Fragment>
    )
  }

export default AdministrarCita;