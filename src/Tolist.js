import React from "react";
export default function Tolist(props) {
  return (
    <>
      <div className="todo_style">
        <i
          className="fas fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
}
