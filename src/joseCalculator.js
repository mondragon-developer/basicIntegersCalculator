import React, { useState } from 'react';

function Calculator() {
    // State for storing user input and calculator result
    const [input, setInput] = useState('');
    const [result, setResult] = useState('= ?');

    // Handle changes in the input field done by the user
    const handleInputChange = (e) => {
        setInput(e.target.value)
    };

       
    // Currently using eval for covenience and to demostrate js skill
    // eval can be/should replace with a safer option like Custom Parser or a library like math.js
    const calcResult = () => {
        // Remove parenthesis, +, -, * and / symbols forom the input
        const revIntegers = input.replace(/[\(\)+\-\*\/]/g, '');
        // Check in the reviewed input contains non-int
        if(/\D/.test(revIntegers)) {
            setResult('Please enter only valid integers, then try again')
        } else {
            try {
                setResult("= " + eval(input).toString());
            
            } catch (e) {
                setResult('Error, check your input if any and try again')
            }
        } 
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    }

    // Create some space between elements since not using the more convenient css
    const spaceStyle = {
        marginBottom: '15px'
    }

    return (
        <div className="calculator">
            <div className="display">
                <h3>Welcome to joseCalculator</h3>
                <h5>Efficiently evaluate expressions using integers and basic operations, including the use of parentheses. This calculator adheres to the standard order of operations for precise and accurate results.</h5>
                <input 
                    type="text" 
                    className="input"
                    style={spaceStyle}
                    value={input} 
                    onChange={handleInputChange} 
                    placeholder="Enter expression" 
                />
                <div className="result" style={spaceStyle}>{result}</div>
            </div>
            <div className="buttons">
                <button onClick={calcResult}>Calculate</button>
                <button onClick={clearInput}>Clear</button>
            </div>
        </div>
    );
}

export default Calculator;