import React ,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare, faSquare ,faEdit,faTimes} from  '@fortawesome/free-solid-svg-icons'

const Tarea = ({tarea,toggleCompletada,editarTarea,borrarTareas}) => {
   const[formulario, mostraFormulario] = useState(false)
   const[nuevaTarea, cambiarNuevaTarea ] = useState(tarea.texto)

   const handleSubmit = (e)=>{
       e.preventDefault()
       editarTarea(tarea.id, nuevaTarea)
       mostraFormulario(false)
   }

    return (  
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
                icon={tarea.completada? faCheckSquare:faSquare} 
                className="lista-tareas__icono lista-tareas__icono-check"
                onClick={()=>{toggleCompletada(tarea.id)}}
            />
            <div className="lista-tareas__texto">
                {formulario ?
                 <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                    <input type="text" value={nuevaTarea} onChange={(e)=>cambiarNuevaTarea(e.target.value)}  className="formulario-editar-tarea__input"/>
                    <button type="submit"    className="formulario-editar-tarea__btn"> Actulizar</button>
                </form> 
               :
               tarea.texto
                }
            </div>      
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon icon={faEdit} onClick={() => mostraFormulario(!formulario)}  className="lista-tareas__icono lista-tareas__icono-accion"/>
                <FontAwesomeIcon icon={faTimes} onClick={() => borrarTareas(tarea.id)}  className="lista-tareas__icono lista-tareas__icono-accion"/>
            </div>
        </li>
    )
}
 
export default Tarea