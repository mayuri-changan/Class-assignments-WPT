
// 1) load page with default background-color -  cyan 

//  take some buttons on page 
// Red
// Yellow
// Green
// Blue
// Orange

// when you click on that button change the background color of page 
import React, { useState } from 'react';

export default function ColorChanger() {

    const [bgColor, setBgColor] = useState('cyan'); // default color

    return (
        <div style={{ backgroundColor: bgColor, height: '100vh', padding: '20px' }}>
            
            <h2>Background Color Changer</h2>

            <button onClick={() => setBgColor('red')}>Red</button>
            <button onClick={() => setBgColor('yellow')}>Yellow</button>
            <button onClick={() => setBgColor('green')}>Green</button>
            <button onClick={() => setBgColor('blue')}>Blue</button>
            <button onClick={() => setBgColor('orange')}>Orange</button>

        </div>
    );
}


