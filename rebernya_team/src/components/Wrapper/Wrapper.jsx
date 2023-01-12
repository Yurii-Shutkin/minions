import React from 'react'

import './Wrapper.css' 
import Teammate from '../Teammate/Teammate'
import team from '../../db'

export default function Wrapper() {

  return (
    <div className='wrapper'>
      <h1 className='title'>
        Миньонщина
      </h1>
      {team.map(i => {
        return (
          <Teammate 
            key={i.name}
            name={i.name}
            color={i.color}
            img={i.img}
            sound={i.sound}
          />
        )
      })}
    </div>
  )
}

