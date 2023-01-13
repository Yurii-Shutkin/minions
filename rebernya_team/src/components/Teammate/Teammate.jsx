import React, { useState } from 'react'

import './Teammate.css'

export default function Teammate({name, color, img, sound}) {
  const [imgClass, setImgClass] = useState('');
  const [itemClass, setItemClass] = useState('');

  const animFunc = (cl, state) => {
    state(cl);
    setTimeout(() => {
      state('')
    }, 1000)
  }

  const play = au => {
    const aud = new Audio(au)
    aud.play()
    console.log(aud)
  }

  const complexFunc = () => {
    animFunc('teammate-anim', setItemClass);
    animFunc('team-img-anim', setImgClass);
    play(sound);
  }

  return (
    <button className={`teammate ${itemClass}`} style={{background: color}} onClick={complexFunc}>
      <div className='team-item'>
        <img className={`team-img ${imgClass}`} src={img} alt="" />
        <span className='team-name'>{name}</span>
      </div>
      <audio src={sound} type='audio/mp3'></audio>
    </button>
  )
}
