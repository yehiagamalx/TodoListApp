import React from "react";

function SingleTodo({ everytodo, TodoitemsAreHere, setTodoitemsAreHere }) {
  // functions
  const DoneHnadler = () => {
    setTodoitemsAreHere(
      TodoitemsAreHere.map((x) => {
        if (x.id === everytodo.id) {
          return {
            ...x,
            completed: !everytodo.completed,
          };
        }
        return x;
      })
    );
  };

  // Deleted

  const DeleteHandler = () => {
    setTodoitemsAreHere(TodoitemsAreHere.filter((x) => x.id !== everytodo.id));
  };

  function catColor() {
    if (everytodo.cat === "personal") {
      return "personal";
    } else if (everytodo.cat === "work") {
      return "work";
    } else if (everytodo.cat === "home") {
      return "home";
    } else if (everytodo.cat === "other") {
      return "other";
    } else {
      return "";
    }
  }

  return (
    <div className="SingleTodo">
      <input type="checkbox" onClick={DoneHnadler} />
      <li
        className={`li-todo ${
          everytodo.completed ? "completed" : ""
        } ${catColor()}`}
      >
        <p>
          {everytodo.text} [{everytodo.cat}]
        </p>
      </li>
      <button onClick={DeleteHandler} className="fas trash-btn">
        Delete
      </button>
    </div>
  );
}

export default SingleTodo;
