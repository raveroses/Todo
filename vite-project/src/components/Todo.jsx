import { useState } from "react";
import List from "./List";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [arrayValue, setArrayValue] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setArrayValue((prevArray) => [...prevArray, inputValue]);
      setInputValue("");
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div>
      <div className="header">
        <div className="logo-image">
          <h1>Diamond</h1>
          <div className="logo">
            <img src="images/diamond.jpg" alt="logo-image" />
          </div>
        </div>
        <div className="date">05-10-2024</div>
      </div>

      <div className="quote">
        <h1>
          Simplicity boils down to two steps: Identify the essential. Eliminate
          the rest.
        </h1>
        <p>
          <small>Leo Babauta, Author and journalist</small>
        </p>
        <div className="writing-image">
          <img src="./images/todo.jpeg" alt="" />
        </div>
      </div>

      <div className="inform-place">
        <form action="" onSubmit={handleSubmission}>
          <input
            type="text"
            placeholder="Add your list here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <div className="add" onClick={addTodo}>
          ADD
        </div>
      </div>

      <div>
        {arrayValue.map((task, index) => (
          <List key={index} todos={[task]} />
        ))}
      </div>
    </div>
  );
}
