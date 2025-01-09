const Checkbox = ({label, value, onChange}) => {
    return (
        <label className="checkbox-wrapper">
            <input className="checkbox-input" type="checkbox" checked={value} onChange={onChange}/>
            {label}
        </label>
    );
};

export default Checkbox;

