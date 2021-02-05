import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/get").then(r=>r.json())
  }, []);
  return (
    <div>
      <h1>this is h1</h1>
    </div>
  );
}

export default App;
