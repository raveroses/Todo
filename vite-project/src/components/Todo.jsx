import { useState } from "react";
import Form from "./Form";
// import List from "./List";
import Header from "./Header";
import Quote from "./Quote";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [arrayValue, setArrayValue] = useState([]);

  return (
    <div>
      <Header />
      <Quote />
      <Form />
    </div>
  );
}
