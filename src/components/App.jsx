import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, addList] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
  }

  function add() {
    addList((prevList) => {
      return [...prevList, text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List </h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((toDoITem) => (
            <li>{toDoITem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
