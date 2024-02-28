import React, { useState } from 'react'

const Test = () => {
    const [carpetPosition, setCarpetPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
      setCarpetPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  return (
    <div>
            <div  className = 'room'  onMouseMove={handleMouseMove}>
      <img src="https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/d95b3508-17ee-4789-abe1-a8f53eb2a5a6.webp" alt="Room Image" style={{ width: '100%', height: 'auto' }} />

      <div class="carpet-container">
      <img
        src="https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/rct_adwl-13219-0001.webp"
        alt="Carpet Image"
        style={{
          position: 'absolute',
          bottom :  '0',
         
          left: carpetPosition.x - 50, 
          width: '400px', 
          height: '400px', 
        }}
      />
  </div>
    
    </div>

            {/* <div class="room">
        <img src= 'https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/d95b3508-17ee-4789-abe1-a8f53eb2a5a6.webp' alt="Room Image"/>
        <img src="https://arnxtsellerproductimages.s3.ap-south-1.amazonaws.com/rct_adwl-13219-0001.webp" alt="Carpet Image" id="carpet"/>
    </div> */}
      
    </div>
  )
}

export default Test
