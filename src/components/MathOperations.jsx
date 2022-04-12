import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const MathOperations = ({onClickOperation , onClickEqual}) =>(
   <section className="math-operation">
        <Button type= "math-operation "text="+" clickHandler={onClickOperation}/>
        <Button type= "math-operation "text="-" clickHandler={onClickOperation}/>
        <Button type= "math-operation "text="*" clickHandler={onClickOperation}/>
        <Button type= "math-operation "text="/" clickHandler={onClickOperation}/>
        <Button type= "math-operation "text="=" clickHandler={onClickEqual}/>
    </section>
)
MathOperations.propTypes ={
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual:PropTypes.func.isRequired
}

export default MathOperations
