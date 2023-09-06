import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");
  const [age, setAge] = useState("");

  // const fetchMessage = () => {
  //   axios
  //     .get("http://localhost:5000/")
  //     .then((response) => {
  //       setMessage(`Hello ${response.data}`);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching message: ", error);
  //     });
  // };
  const checkQualification = () => {
    axios
      .get("http://localhost:5000/check-qualification", { age: age })
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error checking qualifications; ", error);
      });
  };
  return (
    <div>
      {/* <h1 className="text-center">Hello World</h1>
      <button onClick={fetchMessage}>Click me</button>
      <h1>{message}</h1> */}

      <div>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <button onClick={checkQualification}>Check Quaification</button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default App;
