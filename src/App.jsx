// Primero hacemos la importacion (en este caso solo necesitamos la libreria React)
import React, {useState} from "react";
import Result from "./components/Result";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
// importamos el Css
import './App.css'
import { number } from "prop-types";


// generacion de la funcion del componente.

const App = ()=>{
    //arrayTextoFuncionModificaTexto => [" ", funcion]
    
    // Array Destructuring
    // 1er posicion: valor (que inicialmente es el valor por defecto)
    // 2da posicion: funcion que permite modificar el valor por defecto
    // en este caso como usamos array destructuring stack recibe el valor vacio,
    // y setstack permite modificarlo
    
    const [stack, setStack] = useState("")
    console.log('renderizcion de app');
    //como es el contenedor principal le ponemos main y no div
    return (<main className="calc-react">
            <Result value={stack} />
            
            <Numbers onClickNumber = {number => {
                setStack(`${stack}${number}`)
                console.log("numero seleccionado: ", number) 
            }}/>
                
            <Functions onContentClear = {functions => {
                setStack(" ")
                console.log("Clear:", functions)
            }}
                onDelete = {functions => {
                    const newStack = stack.substring(0, stack.length-1)    
                    setStack(newStack)
                        console.log("<-", functions)
             }}/>

            <MathOperations onClickOperation={operation =>{
                 setStack(`${stack}${operation}`)
                 console.log("operations", operation)
                 }}
                 onClickEqual ={equal => {
                    setStack(`${stack}${equal}`)
                    console.log("Equal: ", equal)
                }}
            />
            
            
            </main>)
}
// Exportacion para que se puedda usar el componente

export default App