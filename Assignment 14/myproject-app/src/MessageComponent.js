import React, { useState } from 'react';
export default function MessageComponent(){
    const [text, setText] = useState('');

    const handleClick = () => {
        console.log("Message:", text);
    };

    return (
        <div>
            <h2>Console Message App</h2>

            <input
                type="text"
                placeholder="Enter message"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}


