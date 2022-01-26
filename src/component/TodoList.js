import React from "react";
import SingleTodo from "./SingleTodo";

function TodoList({ todoitemsAreHere, setTodoitemsAreHere, filterTheView }) {
  return (
    <div className="todos-List-div">
      <ul>
        {filterTheView.map((everytodo) => (
          <SingleTodo
            key={everytodo.id}
            everytodo={everytodo}
            TodoitemsAreHere={todoitemsAreHere}
            setTodoitemsAreHere={setTodoitemsAreHere}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
