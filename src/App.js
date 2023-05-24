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
        <form>
          <label>Nombre Mascota</label><input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>
          <label>Nombre Dueño</label><input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
          <label>Fecha</label><input type="date" name="fecha" class="u-full-width" value=""></input>
          <label>hora</label><input type="time" name="hora" class="u-full-width" value=""></input>
          <label>Sintomas</label><textarea name="sintomas" class="u-full-width"></textarea>
          <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form> 
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

export default App;
