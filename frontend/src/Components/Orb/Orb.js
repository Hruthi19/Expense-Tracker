import React from 'react'
import {useWindowSize} from '../../utils/useWindowSize';

function Orb() {

  const {width, height} = useWindowSize(); 
  console.log(width, height); 
   
  return (
    <div className = "orb-container">
     <div className = "orb"
     style={{
        animation: `moveOrb 5s alternate linear infinite`,
        '--orb-width': `${width / 1.2}px`,
        '--orb-height': `${height / 2}px`,
    }}></div> 
    </div>
  )
}

export default Orb;
