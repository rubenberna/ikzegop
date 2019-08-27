import React from 'react';

import './smileys.scss'

const Smiley = (props) => {
  return (
    <>
      <span
        className='smiley'
        role='img'
        aria-label={''}
        aria-hidden={true}
        style={{color: props.color}}
      >
      {props.children}
      </span>
    </>
  )
}

export default Smiley