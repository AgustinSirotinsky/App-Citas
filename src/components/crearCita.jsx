import React,{Fragment} from "react";

function CrearCita(props){

    return (
        <Fragment>
            <div className="crearCita">
            <h2>Crear mi Cita</h2>
                <div>
                    <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" id="mascota"></input>
                    <label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" id="dueno"></input>
                    <label>Fecha</label><input type="date" name="fecha" className="u-full-width" id="fecha"></input>
                    <label>hora</label><input type="time" name="hora" className="u-full-width" id="hora"></input>
                    <label>Sintomas</label><textarea name="sintomas" className="u-full-width" id="sintomas"></textarea>
                    <button type="button" className="u-full-width button-primary" onClick={()=>props.setCitas((prev) => [...prev,{mascota:document.getElementById("mascota").value, duenio:document.getElementById("dueno").value, fecha:document.getElementById("fecha").value, hora1:document.getElementById("hora").value, sintomas1:document.getElementById("sintomas").value}])}>Agregar Cita</button>
                </div> 
            </div>
        </Fragment>
    )
  }

export default CrearCita;