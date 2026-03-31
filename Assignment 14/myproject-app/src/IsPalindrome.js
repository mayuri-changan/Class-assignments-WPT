// B) create react function  component name 
//      IsPalindrome  - which accept data in number format 
 
//  Component should display given number is 
// Palindrome or not     on Browser 

import React, { useState } from 'react';

function IsPalindrome() {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const checkPalindrome = () => {
        let original = number.toString();
        let reversed = original.split('').reverse().join('');

        if (original === reversed) {
            setMessage(number + " is a Palindrome");
        } else {
            setMessage(number + " is NOT a Palindrome");
        }
    };

    return (
        <div>
            <h2>Palindrome Number Checker</h2>

            <input
                type="number"
                placeholder="Enter number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <button onClick={checkPalindrome}>Check</button>

            <h3>{message}</h3>
        </div>
    );
}

export default IsPalindrome;



