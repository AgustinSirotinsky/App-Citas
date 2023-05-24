import { useState } from 'react';
import './App.css';
import Citas from './components/Citas';

function App() {
  return (
    <div className="App">
      <div id="root">
      <Title/>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <CrearCita/>
          </div>
          <div class="one-half column">
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
  <div className="CrearCita">
    <h2>Crear mi Cita</h2>
        <div>
          <label>Nombre Mascota</label><input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" id="mascota"></input>
          <label>Nombre Dueño</label><input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" id="dueno"></input>
          <label>Fecha</label><input type="date" name="fecha" class="u-full-width" id="fecha"></input>
          <label>hora</label><input type="time" name="hora" class="u-full-width" id="hora"></input>
          <label>Sintomas</label><textarea name="sintomas" class="u-full-width" id="sintomas"></textarea>
          <button type="button" class="u-full-width button-primary" onClick={IngresarCita()}>Agregar Cita</button>
        </div> 
  </div>
  )
}

function AdministrarCitas(){
  return (
    <div className='AdministrarCitas'>
      <h2>Administra tus citas</h2>
      <Citas nombre="UOPAA" dueno="Jere" fecha="2023-05-08" hora="16:15" sintomas="No está comiendo"/>
      <Citas nombre="Nina" dueno="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>        
      <Citas nombre="Sifon" dueno="Flecha" fecha="2023-06-10" hora="09:24" sintomas="Duerme mucho"/>   
    </div>
  )
}

function IngresarCita(){
  const [count, setCount] = useState(0);
  let mascota= document.getElementById("mascota").value;
  let duenio= document.getElementById("dueno").value;
  let fecha= document.getElementById("fecha").value;
  let hora1= document.getElementById("hora").value;
  let sintomas1= document.getElementById("sintomas").value;

  <Citas nombre={mascota} dueno={duenio} fecha={fecha} hora={hora1} sintomas={sintomas}/>
}

export default App;

