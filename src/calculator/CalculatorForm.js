import NumberInput from './NumberInput';
import Select from 'react-select';
import Result from './Result';
import React, { useState } from 'react';
import { operations, calculate } from '../utils/calculate';

function CalculatorForm() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState(operations[0]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const numberA = parseFloat(a);
        const numberB = parseFloat(b);
        const result = calculate(numberA, numberB, operation.value);
        setResult(result);
    };

    return (
        <div>
            <form className="CalculatorForm" onSubmit={handleSubmit}>
                <NumberInput name="a" label="Prvn� ��slo" OnChange={e => setA(e.target.value)} />
                <NumberInput name="b" label="Druh� ��slo" OnChange={e => setB(e.target.value)} />
                <Select options={operations} value={operation} onChange={setOperation} />
                <input type="submit" value="Spo��tej" /> 
            </form>
            <Result value={result}/>
        </div>
        
        );
}

export default CalculatorForm;
