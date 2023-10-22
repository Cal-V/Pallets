import React, { useEffect, useRef, useState } from 'react'
import { oklchToRGB, oklchToOklab } from '../Modules/ColorConversion'

function Color({color}) {

    const ref = useRef()

    const [rgb,setRGB] = useState("")
    const [oklab,setoklab] = useState("")

    useEffect(() => {
        let colorString = ref?.current.style.backgroundColor
        colorString = colorString.substring(6,colorString.indexOf(")"))
        let colorValues = colorString.split(" ")
        const newRBG = oklchToRGB({l:colorValues[0],c:colorValues[1],h:colorValues[2]})
        setRGB(newRBG)
        setoklab(oklchToOklab({l:colorValues[0],c:colorValues[1],h:colorValues[2]}))
        console.log(getComputedStyle(ref.current).backgroundColor)
    },[color])

    return (
        <div className='color-block'>
            <div ref={ref} style={color}>
                <p>R: {rgb.r}</p>
                <p>G: {rgb.g}</p>
                <p>B: {rgb.b}</p>
            </div>
            <div style={{backgroundColor:`oklab(${oklab.L} ${oklab.a} ${oklab.b})`}}>
                <p>R: {rgb.r}</p>
                <p>G: {rgb.g}</p>
                <p>B: {rgb.b}</p>
            </div>
        </div>
    )
}

export default Color