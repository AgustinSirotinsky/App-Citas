import React,{Fragment, useState} from "react";

// function ingresarCita(){
// const [citas, setCitas] = useState([]);
//     let mascota= "";
//     mascota= document.getElementById("mascota").value;
//     let duenio= "";
//     duenio= document.getElementById("dueno").value;
//     let fecha= "";
//     fecha= document.getElementById("fecha").value;
//     let hora1= "";
//     hora1= document.getElementById("hora").value;
//     let sintomas1= "";
//     sintomas1= document.getElementById("sintomas").value;
  
//     return(
//       <div>
//         {setCitas(citas.push(<Citas nombre={mascota} dueno={duenio} fecha={fecha} hora={hora1} sintomas={sintomas1}/>))}
//         {console.log(citas)}
//       </div>
//     );
//   }

const ingresarCita = () => {
    const [citas, setCitas] = useState([]);
    React.useEffect(()=>{
        document.title=citas;
    }, [citas]);
    
    return (
        
    )

}
  export default ingresarCita;