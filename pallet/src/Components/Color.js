import React, { useEffect, useRef, useState } from 'react'
import { oklchToRGB, oklchToOklab } from '../Modules/ColorConversion'

function Color({color}) {

    return (
        <div className='color-block'>
            <div style={color}>
            </div>
        </div>
    )
}

export default Color