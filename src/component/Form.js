import React from "react";
import { nanoid } from "nanoid";

function Form({
  inputText,
  setInputText,
  todoitemsAreHere,
  setTodoitemsAreHere,
  setStatus,
  todoCat,
  setTodoCat,
}) {
  // Lets Create Some Functions!
  // First Function will handle Changes in Input text
  const HandleInputText = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  const HandleTodoCat = (event) => {
    // event.preventDefault();
    setTodoCat(event.target.value);
  };

  //Second Function will handle Submit Button

  const HandleSumbit = (event) => {
    event.preventDefault();
    setTodoitemsAreHere([
      ...todoitemsAreHere,
      {
        text: inputText,
        completed: false,
        cat: todoCat,
        id: nanoid(),
      },
    ]);
  };
  // function StatusHandler
  const StatusHandler = (e) => {
    setStatus(e.target.value);
  };

  // function handle validation

  const isValid = (event) => {
    event.preventDefault();
    if (inputText === "" || todoCat === "") {
      alert("please type your to-do and select Cat");
    } else {
      HandleSumbit(event);
      setInputText("");
      setTodoCat("");
      let resetOptions = () => {
        event.target[1].checked = false;
        event.target[1].checked = false;
        event.target[2].checked = false;
        event.target[3].checked = false;
        event.target[4].checked = false;
      };
      resetOptions();
    }
  };
  return (
    <div className="the-form">
      <form onSubmit={isValid}>
        <div className="form-add-item">
          <input
            type="text"
            placeholder="type a task to do"
            onChange={HandleInputText}
            value={inputText}
          />

          <div className="category-group" onChange={HandleTodoCat}>
            <label>
              <input
                type="radio"
                name="action"
                value="personal"
                id="personal"
              />
              Personal
            </label>

            <label>
              <input type="radio" name="action" value="work" id="work" /> Work
            </label>

            <label>
              <input type="radio" name="action" value="home" id="home" /> Home
            </label>

            <label>
              <input type="radio" name="action" value="other" id="other" />{" "}
              Other
            </label>
          </div>

          <button type="input">Add</button>
        </div>

        <div className="div main-filter">
          <select onChange={StatusHandler}>
            <option>All</option>
            <option>Done</option>
            <option>On List</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
