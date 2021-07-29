import React, {useState,useEffect} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import ListaTareas from './componentes/ListaTareas'

const App = ()=> {
  const tareasGuardadas = 
  localStorage.getItem('tareas')? 
  JSON.parse(localStorage.getItem('tareas')) :[]

  const [tareas, agregandoTareas] = useState(tareasGuardadas) 

  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(tareas))
  },[tareas])



  let configMostrarTerminadas = ""

  if (localStorage.getItem('mostrarSeleccionada') === null) {
    configMostrarTerminadas  = true
  }else {
    configMostrarTerminadas = localStorage.getItem('mostrarSeleccionada') === 'true'
  }
 
  const [mostrarSeleccionada,cambiarMostrarSeleccionada] = useState(configMostrarTerminadas)
  
  useEffect(()=>{
    localStorage.setItem('mostrarSeleccionada',mostrarSeleccionada.toString())
  },[mostrarSeleccionada])

  return (
    <div className="contenedor">
      <Header mostrarSeleccionada={mostrarSeleccionada} cambiarMostrarSeleccionada={cambiarMostrarSeleccionada}/>
      <Formulario tareas={tareas} agregandoTareas={agregandoTareas}/>
      <ListaTareas tareas={tareas} agregandoTareas={agregandoTareas} mostrarSeleccionada={mostrarSeleccionada}/>
    </div>
  );
}

export default App;
