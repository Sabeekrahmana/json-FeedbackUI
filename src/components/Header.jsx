
import React from 'react'

const Header = ({text,bgcolor,clr,pad,size,fw,ls}) => {
  
const HeaderStyle = {
    backgroundColor:bgcolor,
    color:clr,
    padding:pad,
    fontSize:size,
    fontWeight: fw,
    letterSpacing: ls
}

  return (
    <div>
        <h2 style ={HeaderStyle}>{text}</h2>
    </div>
  )
}

Header.defaultProps = {
    text: 'FEEDBACK UI',
    pad: '15px 0 15px 0',
    bgcolor: 'lightBlue',
    clr: 'darkred',
    size: '30px',
    fw:'900',
    // ls: '7px'
}

export default Header;

























