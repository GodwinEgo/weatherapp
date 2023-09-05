import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");

  const fetchMessage = () => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setMessage(`Hello ${response.data}`);
      })
      .catch((error) => {
        console.error("Error fetching message: ", error);
      });
  };
  return (
    <div>
      <h1 className="text-center">Hello World</h1>
      <button onClick={fetchMessage}>Click me</button>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
