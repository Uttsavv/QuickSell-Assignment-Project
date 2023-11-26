import "./OptionsCategory.css";

const OptionsCategory = ({ label, options, selectedValue, onSelect }) => {
  return (
    <div className="select-row">
      <div className="selector-label">{label}</div>
      <div>
        <select
          value={selectedValue}
          onChange={(e) => onSelect(e.target.value)}
          className="selector-input"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OptionsCategory;
