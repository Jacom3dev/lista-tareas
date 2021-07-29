import React from 'react'
import Tarea from './Tarea'

const ListaTareas = ({tareas,agregandoTareas,mostrarSeleccionada}) => {

   const toggleCompletada = (id)=>{
    
        agregandoTareas(tareas.map((tarea)=>{
            if(tarea.id === id){
				return {...tarea, completada: !tarea.completada}
                
			}
			return tarea;
        }))
    }
    
    
    
   const editarTarea = (id, nuevoTexto)=>{
        agregandoTareas(tareas.map((tarea)=>{
            if (tarea.id === id) {
                return{...tarea, texto: nuevoTexto} 
                
            }
            return tarea
        }))
    }

    const borrarTareas = (id)=>{
        agregandoTareas(tareas.filter((tarea)=>{
            if (tarea.id !== id) {
                return tarea 
            }
            return
        }))
    }
    
    
    return (  
        <ul className="lista-tareas">
           
            {tareas.length >0 ? tareas.map((tarea)=>{

                if (mostrarSeleccionada) {
                    return <Tarea  key={tarea.id} tarea={tarea} editarTarea={editarTarea} borrarTareas={borrarTareas} toggleCompletada={toggleCompletada} />        
                }else if(!tarea.completada) {
                    return <Tarea  key={tarea.id} tarea={tarea} editarTarea={editarTarea} borrarTareas={borrarTareas} toggleCompletada={toggleCompletada} />        
                    
                }
                return;
            })
            :
                <div className="lista-tareas__mensaje">~no hay tareas asignadas</div>
            }
        </ul>
    )
}
 
export default ListaTareas