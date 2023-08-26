function Result({ value }) {
    if (value != null)
        return <div className="Result">Výsledek je: {value}</div>;
    return null;

}
export default Result;
