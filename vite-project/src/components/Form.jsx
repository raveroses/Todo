import { useState } from "react";
import List from "./List";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleOchange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setList((ele) => [...ele, inputValue]);
      setInputValue("");
    }
  };
  const handleDelete = (index) => {
    setList((ele) => ele.filter((_, ind) => index !== ind));
  };

  return (
    <div>
      <div className="inform-place">
        <form onSubmit={handleSubmission}>
          <input
            type="text"
            value={inputValue}
            onChange={handleOchange}
            placeholder="Add your list here"
          />
          <button type="submit" className="add">
            ADD
          </button>
        </form>
      </div>
      <List list={list} handleDelete={handleDelete} />
    </div>
  );
}
