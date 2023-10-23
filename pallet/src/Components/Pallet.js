import React, { useState } from 'react'
import Color from './Color'

function Pallet() {

  const [count,setCount] = useState(5)
  const [colors,setColors] = useState([
    {backgroundColor:"oklch(.5 .1 0)"},
    {backgroundColor:"oklch(.55 .1 20)"},
    {backgroundColor:"oklch(.6 .1 40)"},
    {backgroundColor:"oklch(.65 .1 60)"},
    {backgroundColor:"oklch(.7 .1 80)"},
])

  const [startingHue,setStartingHue] = useState(0)

  const [palletType,setType] = useState(0)

  const roundTo = (number,points) => {
    const change = Math.pow(10,points)
    return Math.round(number*change)/change
  }

  //type is a number, 0 is analogous, 1 is complementary, 2 is monochromatic, 3 triangle
  const createPallet = (count,type, start) => {
    type = parseInt(type)
    let added = count-1
    let hueChange = roundTo(Math.random()*30+5,2)
    if (Math.random() < .5)
      hueChange =  hueChange*-1
    const luminanceChange = roundTo((Math.random()*.2+.5)/(count),2)
    let startingColor = (start ? {...start} : {L:roundTo(Math.random()/2,2),c:.1,h:Math.round(Math.random()*360)})
    let newColor = {...startingColor}
    console.log(start,newColor)
    let newPallet = [{backgroundColor:`oklch(${startingColor.L} ${startingColor.c} ${startingColor.h})`}]
    switch (type) {
      case 0: {
        for (let i = 0; i < added; i++) {
          newColor = {...newColor,L:roundTo(newColor.L+luminanceChange,2),h:roundTo(newColor.h+hueChange,2)}
          console.log(newColor)
          newPallet = [...newPallet,{backgroundColor:`oklch(${newColor.L} ${newColor.c} ${newColor.h})`}]
        }
        setColors(newPallet)
        break;
      }
      case 1: {
        for (let i = 0; i < added; i++) {
          if (i == Math.round(added/2)-1)
            newColor = {...newColor,L:roundTo(newColor.L+luminanceChange,2),h:newColor.h+180}
          newColor = {...newColor,L:roundTo(newColor.L+luminanceChange,2)}
          newPallet = [...newPallet,{backgroundColor:`oklch(${newColor.L} ${newColor.c} ${newColor.h})`}]
        }
        setColors(newPallet)
        break;
      }
      case 2: {
        for (let i = 0; i < added; i++) {
          newColor = {...newColor,L:roundTo(newColor.L+luminanceChange,2)}
          newPallet = [...newPallet,{backgroundColor:`oklch(${newColor.L} ${newColor.c} ${newColor.h})`}]
        }
        setColors(newPallet)
        break;
      }
      case 3: {
        for (let i = 0; i < added; i++) {
          newColor = {...newColor,L:roundTo(newColor.L+luminanceChange,2),h:newColor.h+120}
          newPallet = [...newPallet,{backgroundColor:`oklch(${newColor.L} ${newColor.c} ${newColor.h})`}]
        }
        setColors(newPallet)
        break;
      }
      case 4: {
        for (let i = 0; i < added; i++) {
          if (i == Math.round(added/2)-1)
            newColor = {...newColor,L:roundTo(newColor.L+luminanceChange,2),h:startingColor.h+180}
          newColor = {...newColor,L:roundTo(newColor.L+luminanceChange,2),h:roundTo(newColor.h+hueChange,2)}
          newPallet = [...newPallet,{backgroundColor:`oklch(${newColor.L} ${newColor.c} ${newColor.h})`}]
        }
        setColors(newPallet)
        break;
      }
    }
  }

  return (
    <div>
        <input type="number" min={3} max={30} value={count} onChange={(evt) => {setCount(evt.target.value);createPallet(evt.target.value,palletType)}} />
        <button onClick={() => createPallet(count,palletType)}>Create Pallet</button>
        <button onClick={() => createPallet(count,Math.floor(Math.random()*5))}>Random</button>
        <button style={{backgroundColor:`oklch(.5 .1 ${startingHue})`}} onClick={() => createPallet(count,palletType,{L:.3,c:.1,h:startingHue})}>Use this Hue</button>
        <input type="range" value={startingHue} onChange={(evt) => setStartingHue(parseInt(evt.target.value))} min="0" max={360} step={1} />
        <select onChange={(evt) => {setType(parseInt(evt.target.value));createPallet(count,evt.target.value);}}>
          <option value={0}>Analogous</option>
          <option value={1}>Complementary</option>
          <option value={2}>Monochromatic</option>
          <option value={3}>Triangle</option>
          <option value={4}>Analogous Complementary</option>
        </select>
        <div className='pallet'>{colors.map((color,index) => (
            <Color key={index} color={color} />
        ))}</div>
    </div>
  )
}

export default Pallet