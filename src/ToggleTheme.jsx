import { useState } from "react";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      style={{
        height: "150px",
        background: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? " #fff" : "#333",
      }}
    >
      <p>Current Theme: {isDarkMode ? "Dark" : "Light"} </p>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle</button>
    </div>
  );
};

export default ToggleTheme;
