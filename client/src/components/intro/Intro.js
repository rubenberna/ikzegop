import React from 'react';

import './intro.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Intro = () => {

  return(
    <div className='intro'>
      <div className='intro-logo'>
      <Logo />
      </div>
      <div className='intro-text'>
        <p>Beste klant,</p>
        <p>Wat jammer dat u de samenwerking met onze onderneming wenst te beëindigen.</p>
        <p>Opdat wij uw melding tot stopzetting vlot en correct zouden kunnen behandelen, vragen wij u vriendelijk om onderstaande velden nauwkeurig in te vullen.</p> 
      </div>
    </div>
  )
}

export default Intro