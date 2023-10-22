import React from 'react'
import Color from './Color'

function Pallet() {

    const colors = [
        {backgroundColor:"oklch(80% .4 0)"},
        {backgroundColor:"oklch(80% .4 60)"},
        {backgroundColor:"oklch(80% .4 120)"},
        {backgroundColor:"oklch(80% .4 180)"},
        {backgroundColor:"oklch(80% .4 240)"},
        {backgroundColor:"oklch(80% .4 300)"}
    ]

  return (
    <div className='pallet'>{colors.map((color,index) => (
        <Color key={index} color={color} />
    ))}</div>
  )
}

export default Pallet