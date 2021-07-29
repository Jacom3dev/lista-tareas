import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from  '@fortawesome/free-solid-svg-icons'

const Formulario = ({tareas,agregandoTareas}) => {
    const [tarea, agregartareaInput] = useState('')

    const handleInput = (e)=>{
        agregartareaInput(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        let letras = tarea.length
        if (letras >= 5) {
            agregandoTareas(
            
                [
                    ... tareas,
                    
                    {
                        id: uuidv4(),
                        texto: tarea,
                        completado: false
                    }
                ]
            )
         agregartareaInput('')        
        }else{
            alert('La tarea debe tener mas de 5 letras')
        }
        
        
    }
   
    return (   
        <form action="" className="formulario-tareas" onSubmit={handleSubmit} >
            <input 
                type="text"
                className="formulario-tareas__input"
                placeholder="Escribe una Tarea"
                value={tarea}
                onChange={(e)=>{handleInput(e)}}
            />
            <button 
                type="submit"
                className="formulario-tareas__btn"
            >
                <FontAwesomeIcon   icon={faPlusSquare} className="formulario-tareas__icono-btn"/>
            </button>
        </form>
    )
}
  
export default Formulario