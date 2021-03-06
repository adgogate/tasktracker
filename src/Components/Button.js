import React from 'react'
 import PropTypes from 'prop-types'
import { black } from 'colorette'
const Button = ({color,text,onClick})=>{


    return(

    <button style={{backgroundColor:color}}onClick={onClick} 
    
    className='btn' >{text}</button>
    
)

}
Button.defaultProps={
color:'black',
text: 'LMAO'
}
Button.propTypes ={
    text: PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}

export default Button