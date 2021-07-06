import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [text, newText] = useState();
  const [items, newItems] = useState([]);
  function handleText(event) {
    newText(event.target.value);
  }
  function addItems() {
    newItems((prevItem) => {
      return [...prevItem, text];
    });
    newText("");
  }
  return (
    <div>
      <input type="text" onChange={handleText} value={text} />
      <button onClick={addItems}>Add item</button>
      <ul>
        {items.map(function (item) {
          return (
            <li
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "white",
                filter: "drop-shadow(8px 8px 10px gray)",
                padding: "30px",
                margin: "40px",
                display: "inline-block"
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
