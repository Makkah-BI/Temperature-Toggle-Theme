function TemperatureDisplay({ celsius }) {
  const fahrenheit = celsius === "" ? "" : ((celsius * 9) / 5 + 32).toFixed(1);

  return (
    <div className="temp-display">
      <p>
        <strong>Celsius:</strong> {celsius} °C
      </p>
      <p>
        <strong>Fahrenheit:</strong> {fahrenheit} °F
      </p>
    </div>
  );
}

export default TemperatureDisplay;
