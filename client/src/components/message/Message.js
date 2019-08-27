import React from 'react'

const Message = ({children, color}) => {

  return (
    <>
    <h2 style={{color: color }}>{children}</h2>
    </>
  )
}

export default Message