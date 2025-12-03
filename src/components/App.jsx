import React from "react";

function App() {
  const [inputText, setInputText] = React.useState("");
  // array intialized kela
  const [items, setItems] = React.useState([]);
  function handleTextInput(event) {
    setInputText(event.target.value);
  }
  function addItem() {
    if (inputText.trim() === "") return; // prevent empty items

    setItems((prevItems) => [...prevItems, inputText]);
    setInputText(""); // clear input
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleTextInput} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
