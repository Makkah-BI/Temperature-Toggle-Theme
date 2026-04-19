import { useState } from "react";
import TemperatureInput from "../components/TemperatureInput";
import TemperatureDisplay from "../components/TemperatureDisplay";

function TemperaturePage() {
  const [celsius, setCelsius] = useState(20);

  return (
    <div className="temperature-page">
      <h2>Temperature Converter</h2>
      <TemperatureInput celsius={celsius} onChange={setCelsius} />
      <TemperatureDisplay celsius={celsius} />
    </div>
  );
}

export default TemperaturePage;
