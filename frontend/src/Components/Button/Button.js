import React from 'react'
import '../../styles/Layouts.css'
import "../../styles/Button.css"

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
  return (
    <div>
    <div className = "inner-layout">
        <button
            className = "button-style"
            style = {{
                background: bg,
                padding: bPad,
                borderRadius: bRad,
                color: color,
            }}
            onClick = {onClick}
        >
            {icon}
            {name}
        </button>
    </div>
    </div>
  )
}

export default Button
