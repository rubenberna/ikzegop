import React from 'react';

import './smileys.scss'

const Smiley = (props) => {
  return (
    <>
      <span
        className='smiley'
        role='img'
        aria-label={props.label}
        style={{color: props.color}}
      >
      {props.children}
      </span>
    </>
  )
}

export default Smiley