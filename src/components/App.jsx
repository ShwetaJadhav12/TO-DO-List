import React from "react";

function App() {
  const [Listname, onNameChange] = React.useState("");
  function handleChange(event) {
    onNameChange(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={Listname} />
        <button onClick={handleChange}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{Listname}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
