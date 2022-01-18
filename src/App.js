import React, { useState, useEffect, useCallback } from "react";
import Form from "./component/Form.js";
import TodoList from "./component/TodoList.js";

function App() {
  // Lets create some States to play with
  // First State will hold the InputText
  const [inputText, setInputText] = useState("");

  // Fourth State will hold category
  const [todoCat, setTodoCat] = useState("");

  // Second State will hold the Todo items
  const [todoitemsAreHere, setTodoitemsAreHere] = useState([]);

  // three state will hold the filter
  const [status, setStatus] = useState("all");
  const [filterTheView, setFilterTheView] = useState([]);

  // local

  const saveLocalTodos = useCallback(() => {
    window.localStorage.setItem("todos", JSON.stringify(todoitemsAreHere));
  }, [todoitemsAreHere]);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(window.localStorage.getItem("todos"));
      setTodoitemsAreHere(todoLocal);
    }
  };

  // function to filter
  const filterHandler = useCallback(
    (e) => {
      switch (status) {
        case "Done":
          setFilterTheView(
            todoitemsAreHere.filter((x) => x.completed === true)
          );
          break;
        case "On List":
          setFilterTheView(
            todoitemsAreHere.filter((x) => x.completed === false)
          );
          break;
        default:
          setFilterTheView(todoitemsAreHere);
      }
    },
    [status, todoitemsAreHere]
  );

  // useEffect
  useEffect(() => {
    console.log("useEffect ruuning everychange in  filterTheView");
    filterHandler();
  }, [filterHandler]);

  useEffect(() => {
    console.log("useEffect Running for the first time with get local function");
    getLocalTodos();
  }, []);

  useEffect(() => {
    console.log("useEffect ruuning everychange in saveLocalTodos");
    saveLocalTodos();
  }, [saveLocalTodos]);

  return (
    <div className="App">
      <h1>The Todo List App</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoitemsAreHere={todoitemsAreHere}
        setTodoitemsAreHere={setTodoitemsAreHere}
        filterTheView={filterTheView}
        setFilterTheView={setFilterTheView}
        status={status}
        setStatus={setStatus}
        todoCat={todoCat}
        setTodoCat={setTodoCat}
      />
      <TodoList
        todoitemsAreHere={todoitemsAreHere}
        setTodoitemsAreHere={setTodoitemsAreHere}
        filterTheView={filterTheView}
        setFilterTheView={setFilterTheView}
      />
    </div>
  );
}

export default App;
