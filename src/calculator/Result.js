function Result({ value }) {
    if (value != null)
        return <div className="Result">V�sledek je: {value}</div>;
    return null;

}
export default Result;
