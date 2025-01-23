const Checkbox = ({label, value, onChange, extraClasses}) => {
    return (
        <label className={"checkbox-wrapper" + (!!extraClasses ? " " + extraClasses : "")}>
            <input className="checkbox-input" type="checkbox" checked={value} onChange={onChange}/>
            {label}
        </label>
    );
};

export default Checkbox;

