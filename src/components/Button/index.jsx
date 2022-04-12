//importamos react y otras librerias
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
//componente funcional:
const Button = ({type, text, clickHandler}) => (
       <button className= {type} onClick={() => clickHandler(text)}>
           <span> {text} </span>
       </button>
    )  

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}
// Exportamos el componente
export default Button