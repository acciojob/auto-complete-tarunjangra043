import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState(fruits);

  useEffect(() => {
    if (inputValue) {
      const filteredSuggestions = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions(fruits);
    }
  }, [inputValue]);

  return (
    <div>
      <h1>Search Item</h1>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Type a fruit..."
      />

      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
