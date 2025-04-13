import React, { useEffect, useReducer, useRef, useState } from 'react'

export const Snake = ({width, height, canvas}) => {

    const [speed, setSpeed] = useState(2);
    const [length, setLength] = useState(3);
    const animationRef = useRef();
    const positions = useRef([{x: 10, y: 10}, {x: 30, y: 10}, {x: 50, y: 10}]);


    useEffect(() => {
        if(!canvas) return;
        const ctx = canvas.getContext('2d');
        console.log(canvas);

        const drawFrame = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
      
            ctx.fillStyle = 'yellow';
            positions.current.forEach((pos, index) => {
              if(index == 0) {
                ctx.beginPath();
                ctx.arc(pos.x+10, pos.y+10, 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                ctx.fillRect(pos.x+10, pos.y, 10, 20);
              } else {
                ctx.fillRect(pos.x, pos.y, 20, 20);
              }
            });
            const tempArr = [];
            positions.current.forEach((pos) => {
                tempArr.push({x: pos.x + speed, y: pos.y});
            })
            positions.current = tempArr;
            animationRef.current = requestAnimationFrame(drawFrame);
        };

        drawFrame();

        return () => {
            cancelAnimationFrame(animationRef.current);
        }
    }, [canvas]);

    // it return no ui element but draws the animation in the prop canvas
    return (<>
    </>)
}
