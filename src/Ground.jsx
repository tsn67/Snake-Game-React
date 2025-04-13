import React, { useEffect, useRef, useState } from 'react'
import { Snake } from './Snake';

export const Ground = () => {

    const container = useRef(null);
    const [dimension, setDimension] = useState({width: 0, height: 0});
    const canvasRef = useRef();

    useEffect(() => {
        const updateDimensions = () => {
          if (container.current) {
            setDimension({
              width: container.current.offsetWidth,
              height: container.current.offsetHeight,
            });
          }
        };
    
       
        updateDimensions(); 
        window.addEventListener('resize', updateDimensions);
        return () => {
          window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    // dimension will have width and height (in px) of the snake ground

    // useEffect(() => {
    //     console.log(dimension);
    // }, [dimension]);

    return (<div ref={container} className='lg:h-[500px] lg:w-[500px]  h-[350px] w-[350px] bg-[#0F3460] outline-[3px] outline-[#16C79A]'>
      {<Snake canvas={canvasRef.current} height={dimension.height} width={dimension.width}/>}
      <canvas ref={canvasRef} width={dimension.width} height={dimension.height}/>
    </div>)
}
