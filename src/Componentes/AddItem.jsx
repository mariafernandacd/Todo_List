import React, { useState } from "react";

const AddItem = ({ addItem }) => {
  const [InputValue, setInputValue] = useState(" ");

  const sendText = (event) => {
    event.preventDefault();
    if (!InputValue) return;
    addItem(InputValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        className="inputs"
        placeholder="Ingrese una tarea"
        type="text"
        value={InputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button className="btnAdd " onClick={sendText}>
        Añadir
      </button>
    </div>
  );
};
export default AddItem;
