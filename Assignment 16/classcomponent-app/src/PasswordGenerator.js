// 1) create RandomPassword Generator Function
// Component
// use useState , useEffect and useCallBack Hooks


import React, { useState, useEffect, useCallback } from 'react';
export default function PasswordGenerator(){
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState('');

    // Function to generate password
    const generatePassword = useCallback(() => {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
        let pass = "";

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * chars.length);
            pass += chars[randomIndex];
        }

        setPassword(pass);
    }, [length]);

    // Run when component loads or length changes
    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    return (
        <div>
            <h2>Random Password Generator</h2>

            <h3>Password: {password}</h3>

            <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                min="4"
                max="20"
            />

            <button onClick={generatePassword}>Generate Password</button>
        </div>
    );
}


