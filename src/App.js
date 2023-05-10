import './App.css';

function App() {
  return (
    <div className="App">
      <Title/>
      <div class="container">
        <div class="row">
        <div class="one-half column">
        <CrearCita/>
        </div>
        </div>
      </div>
    </div>
  );
}
function Title() {
  return (
    <h1>hola soy el h1</h1>
  )
}
function CrearCita(){
  return (
  <div className="CrearCita">
    <h2>Crear mi Cita</h2>
        <form>
          <label>Nombre de la mascota</label>
          <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>
          <label>Nombre Dueño</label><input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
          <label>Fecha</label><input type="date" name="fecha" class="u-full-width" value=""></input>
          <label>hora</label><input type="time" name="hora" class="u-full-width" value=""></input>
          <label>Sintomas</label><textarea name="sintomas" class="u-full-width"></textarea>
          <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form> 
  </div>
  )
}

export default App;
