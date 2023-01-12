import React from 'react'

import './Teammate.css'

export default function Teammate({name, color, img, sound}) {
  const play = au => {
    const aud = new Audio(au)
    aud.play()
  }

  return (
    <div className='teammate' style={{background: color}} onClick={() => play(sound)}>
      <div className='team-item'>
        <img className='team-img' src={img} alt="" />
        <span className='team-name'>{name}</span>
      </div>
      <audio src={sound} type='audio/ogg'></audio>
    </div>
  )
}
