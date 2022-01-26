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

  return (
    <div className="SingleTodo">
      <input type="checkbox" onClick={DoneHnadler} />

      <li
        className={`li-todo ${everytodo.completed ? "completed" : ""}  `}
        style={{ color: `${everytodo.color}` }}
      >
        <p>
          {everytodo.text} [{everytodo.cat}]
        </p>
      </li>
      <button onClick={DeleteHandler} className="fas trash-btn">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default SingleTodo;
