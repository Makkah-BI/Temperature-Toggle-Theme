function TemperatureInput({ celsius, onChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    // Convert empty string to empty, else parse as number
    onChange(value === "" ? "" : Number(value));
  };

  return (
    <div className="temp-input">
      <label>Temperature (°C): </label>
      <input
        type="number"
        value={celsius}
        onChange={handleChange}
        placeholder="Enter temperature"
      />
    </div>
  );
}

export default TemperatureInput;
