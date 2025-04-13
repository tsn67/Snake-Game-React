import React, { useEffect, useRef, useState } from 'react'

export const Ground = () => {

    const container = useRef(null);
    const [dimension, setDimension] = useState({width: 0, height: 0});

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

    // useEffect(() => {
    //     console.log(dimension);
    // }, [dimension]);

    return (<div ref={container} className='lg:h-[500px] lg:w-[500px]  h-[350px] w-[350px] bg-[#0F3460] outline-[3px] outline-[#16C79A] my-20'></div>)
}
