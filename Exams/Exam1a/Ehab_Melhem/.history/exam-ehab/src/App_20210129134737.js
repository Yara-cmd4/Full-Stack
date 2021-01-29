import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [total, setTotall] = useState(0);
  useEffect(() => {
    fetch("/make-id")
      .then((r) => r.json())
      .then((data) => {
        if (localStorage.getItem("id") === null) {
          localStorage.setItem("id", data.id);
        }
      });
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 1, b: 'Textual content'})
  }, []);
  return (
    <div className="app">
      <div className="container">
        <h4>total sum available {total}$</h4>
      </div>
    </div>
  );
}

export default App;
