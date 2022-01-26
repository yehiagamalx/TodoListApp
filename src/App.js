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

  // state for categroies
  const [inputCat, setInputCat] = useState("");
  const [categroies, setCategroies] = useState([]);
  const [catColor, setCatColor] = useState("");

  // local todos

  const saveLocalTodos = useCallback(() => {
    localStorage.setItem("todos", JSON.stringify(todoitemsAreHere));
  }, [todoitemsAreHere]);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(window.localStorage.getItem("todos"));
      setTodoitemsAreHere(todoLocal);
    }
  };
  // local Cats
  const saveLocalTCats = useCallback(() => {
    localStorage.setItem("cats", JSON.stringify(categroies));
  }, [categroies]);

  const getLocalCats = () => {
    if (localStorage.getItem("cats") === null) {
      localStorage.setItem("cats", JSON.stringify([]));
    } else {
      let catsLocal = JSON.parse(localStorage.getItem("cats"));
      setCategroies(catsLocal);
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
    filterHandler();
  }, [filterHandler]);

  useEffect(() => {
    getLocalTodos();
    getLocalCats();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [saveLocalTodos]);

  useEffect(() => {
    saveLocalTCats();
  }, [saveLocalTCats]);

  return (
    <div className="App">
      <div className="left-side">
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
          categroies={categroies}
          setCategroies={setCategroies}
          inputCat={inputCat}
          setInputCat={setInputCat}
          catColor={catColor}
          setCatColor={setCatColor}
        />
      </div>{" "}
      <div className="right-side">
        <TodoList
          todoitemsAreHere={todoitemsAreHere}
          setTodoitemsAreHere={setTodoitemsAreHere}
          filterTheView={filterTheView}
          setFilterTheView={setFilterTheView}
        />
      </div>
    </div>
  );
}

export default App;
