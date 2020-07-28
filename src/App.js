import React, { useState } from "react";
import "./App.css";
import "./Componentes/styles/main.scss";
import AddItem from "./Componentes/AddItem";
import Item from "./Componentes/Item";
import Button from "./Componentes/Button";

function App() {
  const [list, setList] = useState([]);
  const [filters, setFilters] = useState(null);

  const addItem = (value) => {
    const newItem = [{ value, isCompleted: false }, ...list];
    setList(newItem);
  };

  const completeItem = (index) => {
    const newItem = [...list];
    newItem[index].isCompleted = true;
    setList(newItem);
  };

  const removeItem = (index) => {
    const newItem = [...list];
    newItem.splice(index, 1);
    setList(newItem);
  };
  const changeText = (event, index) => {
    const newList = [...list];
    newList[index].value = event.target.value;
    setList(newList);
  };

  return (
    <div className="conteiner">
      <h1 className="title">Todo List.</h1>
      <AddItem addItem={addItem} />
      {list
        .filter((item) => {
          console.log({ filters, item });
          if (filters !== null) {
            return filters === item.isCompleted;
          }
          return true;
        })
        .map((item, index) => (
          <Item
            key={index}
            index={index}
            item={item}
            completeItem={completeItem}
            changeText={changeText}
            removeItem={removeItem}
          />
        ))}
      <Button setFilters={setFilters} changeText={changeText} />
    </div>
  );
}

export default App;
