import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye,faEyeSlash} from  '@fortawesome/free-solid-svg-icons'

const Header = ({mostrarSeleccionada,cambiarMostrarSeleccionada}) => {
    
    const toggleCompletadas = ()=>{
        cambiarMostrarSeleccionada(!mostrarSeleccionada)
    }

    return ( 
        <header className="header">
            <h1 className="header__titulo">Lista de tareas</h1>
            
            {mostrarSeleccionada?
            
            <button className="header__boton" onClick={()=>toggleCompletadas()}>
                No mostrar Completadas 
               <FontAwesomeIcon icon={faEyeSlash}  className="header__icono-boton" />
            </button>

            :
            <button className="header__boton" onClick={()=>toggleCompletadas()}>
                mostrar Completadas 
               <FontAwesomeIcon icon={faEye}  className="header__icono-boton" />
            </button>
         }
        </header>
    )
}
 
export default Header;