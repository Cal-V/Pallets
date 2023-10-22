import React, { useState } from 'react'
import Color from './Color'

function Pallet() {

  const [count,setCount] = useState(6)

  const colors = [
      {backgroundColor:"oklch(.5 .1 0)"},
      {backgroundColor:"oklch(.55 .1 20)"},
      {backgroundColor:"oklch(.6 .1 40)"},
      {backgroundColor:"oklch(.65 .1 60)"},
      {backgroundColor:"oklch(.7 .1 80)"},
  ]

  const createPallet = (count,type) => {
    
  }

  return (
    <div>
        <input type="number" value={count} onChange={(evt) => {setCount(evt.target.value);createPallet(count)}} />
        <button>Create Pallet</button>
        <div className='pallet'>{colors.map((color,index) => (
            <Color key={index} color={color} />
        ))}</div>
    </div>
  )
}

export default Pallet