import React,{Fragment} from "react";


function IngresarCita(){
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

    

    return(
        <Fragment>
            <div>
                {console.log(cita)}
            </div>
        </Fragment>
    );
  }

// const agregarCita = () => {
//     const [citas, setCitas] = useState([]);
//     React.useEffect(()=>{
//         document.title=citas;
//     }, [citas]);
    
//     return (
        
//     )

// }
export default IngresarCita;