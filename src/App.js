import { useState } from 'react';
import './App.css';
import Citas from './components/Citas';
import ingresarCita from './components/ingresarCita';

function App() {
  
  return (
    <div className="App">
      <div id="root">
      <Title/>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <CrearCita/>
          </div>
          <div className="one-half column">
            <AdministrarCitas/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

function Title() {
  return (
    <h1>ADMINISTRADOR DE PACIENTES</h1>
  )
}

function CrearCita(){
  return (
  <div className="crearCita">
    <h2>Crear mi Cita</h2>
        <div>
          <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" id="mascota"></input>
          <label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" id="dueno"></input>
          <label>Fecha</label><input type="date" name="fecha" className="u-full-width" id="fecha"></input>
          <label>hora</label><input type="time" name="hora" className="u-full-width" id="hora"></input>
          <label>Sintomas</label><textarea name="sintomas" className="u-full-width" id="sintomas"></textarea>
          <button type="button" className="u-full-width button-primary" onClick={ingresarCita}>Agregar Cita</button>
        </div> 
  </div>
  )
}

function AdministrarCitas(){
  return (
    <div className='administrarCitas'>
      <h2>Administra tus citas</h2>
      <Citas nombre="UOPAA" dueno="Jere" fecha="2023-05-08" hora="16:15" sintomas="No está comiendo"/>
      <Citas nombre="Nina" dueno="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>        
      <Citas nombre="Sifon" dueno="Flecha" fecha="2023-06-10" hora="09:24" sintomas="Duerme mucho"/>
    </div>
  )
}


export default App;

