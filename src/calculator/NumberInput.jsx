function NumberInput({ name, label, value, OnChange }) {
    return (
        <label htmlFor={name}>
            {label}
            <input onChange={OnChange}
                id={name}
                value={value}
                type="number"
                name={name}
            />
        </label>
    );
}
export default NumberInput;