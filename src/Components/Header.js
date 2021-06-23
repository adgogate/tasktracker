import React from 'react'
import PropTypes from  'prop-types'
import Button from './Button.js'
const Header = (props) =>{
    const onClick=
        ()=>{
    }
    return (
<header className='header'>
<h1 >{props.title}</h1>
<Button text={props.showAdd?'Close':'Add'} color={props.showAdd?'green':'blue'} onClick={props.onAdd}></Button> 
  </header>
    )
}

Header.defaultProps={
    title:'Task Tracker',
    color: 'green'
}

Header.propTypes={
    title: PropTypes.string.isRequired,
}

export default Header 