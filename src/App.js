import { useState } from 'react';
import './components/components.css'
import	AdministrarCita from './components/administrarCitas'
import CrearCita from './components/CrearCita';
import React,{Fragment} from "react";

function App() {
  const [citas, setCitas] = React.useState([]);
  return (
    <div className="App">
      <div id="root">
      <Title/>
      <div className="container">
        <div className="row">
          <div className="one-half column"> 
            <CrearCita setCitas={setCitas}></CrearCita>
          </div>
          <div className="one-half column">
            <AdministrarCita citas={citas} setCitas={setCitas}/>
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

export default App;

