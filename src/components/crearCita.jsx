import React,{Fragment} from "react";

function CrearCita(){
    const [cita, setCitas] = React.useState([]);
    let mascota= "";
    mascota= document.getElementById("mascota").value;
    let duenio= "";
    duenio= document.getElementById("dueno").value;
    let fecha= "";
    fecha= document.getElementById("fecha").value;
    let hora1= "";
    hora1= document.getElementById("hora").value;
    let sintomas1= "";
    sintomas1= document.getElementById("sintomas").value;

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
                    <button type="button" className="u-full-width button-primary" onClick={()=>setCitas({mascota, duenio, fecha, hora1, sintomas1})}>Agregar Cita</button>
                </div> 
            </div>
        </Fragment>
    )
  }

function IngresarCita(){
        let mascota= "";
        mascota= document.getElementById("mascota").value;
        let duenio= "";
        duenio= document.getElementById("dueno").value;
        let fecha= "";
        fecha= document.getElementById("fecha").value;
        let hora1= "";
        hora1= document.getElementById("hora").value;
        let sintomas1= "";
        sintomas1= document.getElementById("sintomas").value;
      }
    
export default CrearCita;