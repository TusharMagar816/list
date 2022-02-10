import React, { useState } from "react";
import Tolist from "./Tolist";
export default function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  function listOfItems() {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }
  function inputEvent(event) {
    setInputList(event.target.value);
  }
  function deleteItems(id) {
    console.log("delete");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={inputEvent}
            value={inputList}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {/* <li>{inputList}</li>*/}
            {Items.map((itemval, index) => {
              return (
                <Tolist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
