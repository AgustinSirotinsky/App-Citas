import React,{Fragment} from "react";
import Citas from "./citas";
import './components.css';

function AdministrarCita(){
    return (
      <Fragment>
        <div className='administrarCitas'>
          <h2>Administra tus Citas</h2>
          <Citas nombre="Jose" dueno="Jere" fecha="2023-05-08" hora="16:15" sintomas="No está comiendo"/>
          <Citas nombre="Nina" dueno="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>        
          <Citas nombre="Sifon" dueno="Flecha" fecha="2023-06-10" hora="09:24" sintomas="Duerme mucho"/>
        </div>
      </Fragment>
    )
  }

export default AdministrarCita;